import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { userState } from "../atom/user";
import { loginValidation } from "../validations/loginYup";
import {
  loginEmail,
  loginGoogle,
  setLoginState,
} from "../firebase/Firebase.js";
import { LoginType } from "../models/login";
import FormErrorMessage from "../errorComponent/FormErrorMessage";
import { getUser } from "../services/Login";
import FailLoginError from "../errorComponent/FailLoginError";
import Spinner from "../components/modals/Spinner";

const LoginPage = () => {
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useRecoilState(userState);
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginValidation),
    mode: "onBlur", //포커스가 멈췄을때 유효성 트리거
  });

  const saveUserData = async (userData) => {
    const data = await getUser(userData.user.email);
    setUser(data.user);
  };

  const tryLogin = async (loginMethod, args) => {
    loginMethod(...args)
      .then((result) => {
        console.log("성공");
        saveUserData(result);
        setLoginState();
        navigateTo("/");
        setError(null);
        setLoding(false);
      })
      .catch((e) => {
        setLoding(false);
        setError(e);
      });
  };

  const onGoggleClick = async () => {
    tryLogin(loginGoogle, []);
  };

  const onLoginClick = async ({ email, password }) => {
    setLoding(true);
    tryLogin(loginEmail, [email, password]);
  };

  return (
    <MainDiv>
      <InnerDiv>
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit(onLoginClick)}>
          <Input
            placeholder="아이디를 입력해주세요"
            type="email"
            autoComplete="on"
            {...register("email")}
            onChange={() => setError(null)}
          />
          {errors.email && (
            <FormErrorMessage errorMessage={errors.email.message} />
          )}
          <Input
            placeholder="패스워드를 입력해주세요"
            type="password"
            autoComplete="on"
            maxLength={25}
            {...register("password")}
            onChange={() => setError(null)}
          />
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
            <Button role="button" onClick={() => navigateTo("/signup")}>
              회원가입
            </Button>
          </InnerButton>
          <InnerButton role="button">
            <Button onClick={onGoggleClick}>구글 로그인</Button>
          </InnerButton>
        </div>
        <SearchDiv>
          <A>아이디</A>
          <A>/</A>
          <A> 비밀번호 찾기 </A>
        </SearchDiv>
      </InnerDiv>
          {loding && <Spinner />}
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
  padding: 0 13px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 11px;
  font-size: 14px;
`;

export default LoginPage;
