import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SignSuccessPage() {
  return (
    <Container>
      <InnerContainer>
        <H1>환영합니다!</H1>
        <h2>회원가입을 축하합니다. 입니다.</h2>
        <ButtonContainer>
          <Link to="/">
            <HomeButton>메인 페이지로 이동</HomeButton>
          </Link>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
}

const H1 = styled.h1`
  font-size: 60px;
`;

const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  place-content: center;
  text-align: center;
`;

const HomeButton = styled.button`
  font-size: 19px;
  width: 190px;
  height: 40px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #191919;
  border: 0;
`;

const InnerContainer = styled.section``;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export default SignSuccessPage;
