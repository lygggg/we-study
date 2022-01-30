import React, { useState } from "react";
import styled from "styled-components";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <Container>
      <Inner>
        <Title>회원가입</Title>
        <form>
          <div>
            <span>
              <Label>아이디*</Label>
            </span>
            <Input
              placeholder="이메일 형식으로 입력해주세요."
              value={email}
              type="email"
              onChange={(v) => setEmail(v.target.value)}
            />
          </div>
          <div>
            <span>
              <Label>비밀번호*</Label>
            </span>
            <Input
              type="password"
              value={password}
              placeholder="비밀번호
                (영문 숫자 특수문자 2가지 이상 6~15자 이내)"
              onChange={(v) => setPassword(v.target.value)}
            />
          </div>
          <div>
            <span>
              <Label>비밀번호확인*</Label>
            </span>
            <Input
              type="password"
              value={checkPassword}
              placeholder="비밀번호 확인"
              onChange={(v) => setCheckPassword(v.target.value)}
            />
          </div>
          <div>
            <span>
              <Label>이름*</Label>
            </span>
            <Input
              type="name"
              value={name}
              placeholder="이름"
              onChange={(v) => setName(v.target.value)}
            />
          </div>

          <div>
            <SignButton type="primary">동의하고 가입하기</SignButton>
          </div>
        </form>
      </Inner>
    </Container>
  );
};

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

const Inner = styled.div`
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
  width: 120px;
  margin-top: 30px;
  font-size: 13px;
  font-weight: bold;
`;

const SignButton = styled.button`
  display: block;
  width: 340px;
  height: 54px;
  margin: 45px auto 0;
  border: 0 none;
  border-radius: 3px;
  background-color: #0c151c;
  font-size: 16px;
  color: #fff;
  line-height: 44px;
  letter-spacing: -0.3px;
`;

export default SignUpPage;
