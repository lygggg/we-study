import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signupEmail } from "../firebase/Firebase.js";
import { signUpUser } from "../services/SignUp";
import { SignUpType } from "../models/signUp";
import { signUpValidation } from "../validations/signUpYup";
import FormErrorMessage from "../errorComponent/FormErrorMessage";
import FailSignError from "../errorComponent/FailSignError.jsx";
import Spinner from "../components/modals/Spinner.jsx";

const SignUpPage = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: yupResolver(signUpValidation),
    mode: "onBlur", //포커스가 멈췄을때 유효성 트리거
  });

  const onClickSignUp = async ({ email, password, name }) => {
    setLoading(true);
    signupEmail(email, password)
      .then(async (result) => {
        await signUpUser({ name, email });
        navigateTo("/signup/success");
        setLoading(false);
        setError(null);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  };

  return (
    <Container>
      <InnerContainer>
        <Title>회원가입</Title>
        <form onSubmit={handleSubmit(onClickSignUp)}>
          <div>
            <span>
              <Label>아이디*</Label>
            </span>
            <Input
              placeholder="이메일 형식으로 입력해주세요."
              type="email"
              {...register("email")}
            />
            <div>
              {errors.email && (
                <FormErrorMessage errorMessage={errors.email.message} />
              )}
            </div>
          </div>
          <div>
            <span>
              <Label>비밀번호*</Label>
            </span>
            <Input
              type="password"
              placeholder="비밀번호
                (영문 숫자 최소 4자리 최대 15자리)"
              {...register("password")}
            />
            <div>
              {errors.password && (
                <FormErrorMessage errorMessage={errors.password.message} />
              )}
            </div>
          </div>
          <div>
            <span>
              <Label>비밀번호확인*</Label>
            </span>
            <Input
              type="password"
              placeholder="비밀번호 확인"
              {...register("checkPassword")}
            />
            <div>
              <div>
                {errors.checkPassword && (
                  <FormErrorMessage
                    errorMessage={errors.checkPassword.message}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <span>
              <Label>이름*</Label>
            </span>
            <Input type="name" placeholder="이름" {...register("name")} />
            <div>
              {errors.name && (
                <FormErrorMessage errorMessage={errors.name.message} />
              )}
            </div>
          </div>
          <ButtonContainer>
            {!!error && (
              <ErrorContainer>
                <FailSignError />
              </ErrorContainer>
            )}
            <SignButton type="submit">가입하기</SignButton>
          </ButtonContainer>
        </form>
        {loading && <Spinner />}
      </InnerContainer>
    </Container>
  );
};

const ErrorContainer = styled.div`
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  text-align: -webkit-center;
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

const InnerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 550px) {
    max-width: 550px;
  }
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
`;

const Label = styled.span`
  display: inline-block;
  width: 75px;
  margin-top: 30px;
  font-size: 13px;
  font-weight: bold;
`;

const SignButton = styled.button`
  display: block;
  width: 380px;
  height: 54px;
  border: 0 none;
  border-radius: 3px;
  background-color: #0c151c;
  font-size: 16px;
  color: #fff;
  line-height: 44px;
`;

export default SignUpPage;
