import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { loginValidation } from "../validations/loginYup";
import { loginEmail, loginGoogle } from "../firebase/Firebase";
import FormErrorMessage from "../errorComponent/FormErrorMessage";
import FailLoginError from "../errorComponent/FailLoginError";
import Spinner from "../components/modals/Spinner";

import { useMe } from "../hook/useMe";
import { useLogin } from "../hook/useLogin";
import { login } from "../models/login";

export interface LoginType {
  email: string;
  password: string;
}

const LoginPage = () => {
  const user = useMe();
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<any>();
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginValidation),
    mode: "onBlur", //포커스가 멈췄을때 유효성 트리거
  });

  const tryLogin = useLogin({ setLoading, setError });

  const onGoggleClick = async () => {
    setLoading(true);
    tryLogin(loginGoogle, ["", ""]);
  };

  const onLoginClick = async ({ email, password }: login) => {
    setLoading(true);
    tryLogin(loginEmail, [email, password]);
  };

  return (
    <MainDiv>
      {!user._id ? (
        <InnerDiv>
          <Title>로그인</Title>
          <Form onSubmit={handleSubmit(onLoginClick)}>
            <label>
              <Input
                className="user_id"
                placeholder="아이디를 입력해주세요"
                type="email"
                {...register("email")}
                onInput={() => setError(null)}
              />
              {errors.email && (
                <FormErrorMessage errorMessage={errors.email.message} />
              )}
            </label>
            <label>
              <Input
                className="user_password"
                placeholder="패스워드를 입력해주세요"
                type="password"
                maxLength={25}
                autoComplete="on"
                {...register("password")}
                onInput={() => setError(null)}
              />
            </label>
            {errors.password && (
              <FormErrorMessage errorMessage={errors.password.message} />
            )}
            {!!error && <FailLoginError />}
            <InnerButton>
              <LoginButton type="submit">로그인</LoginButton>
            </InnerButton>
          </Form>
          <div>
            <InnerButton>
              <Button
                className="signup"
                role="button"
                onClick={() => navigateTo("/signup")}
              >
                회원가입
              </Button>
            </InnerButton>
            <InnerButton role="button">
              <Button onClick={onGoggleClick}>구글 로그인</Button>
            </InnerButton>
          </div>
          {loading && <Spinner />}
          <SearchDiv>
            <A>아이디</A>
            <A>/</A>
            <A> 비밀번호 찾기 </A>
          </SearchDiv>
        </InnerDiv>
      ) : (
        <Navigate to="/" />
      )}
    </MainDiv>
  );
};

const LoginButton = styled.button`
  color: #ffffff;
  background-color: #0c151c;
  font-size: 19px;
  font-weight: bold;
`;

const InnerDiv = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

const MainDiv = styled.div`
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

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: grid;
  height: 230;
  margin-bottom: 8px;
  justify-items: center;
`;

const InnerButton = styled.div`
  display: grid;
  width: 426px;
  height: 60px;
  grid-gap: 9px;
  margin: 10px;
`;

const SearchDiv = styled.div`
  display: flex;
  height: 60px;
  width: 426px;
  justify-content: end;
`;

const Button = styled.button`
  background: white;
  color: #000000;
  font-weight: bold;
  border: 1px solid black;
  font-weight: bold;
  font-size: 19px;
`;

const A = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #333;
  margin: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 400px;
  height: 60px;
  color: #000000;
  padding: 0 13px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 11px;
  font-size: 14px;
`;

export default LoginPage;
