import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../atom/user";
import { getQuestionCount } from "../services/Question";

const Info = () => {
  const user = useRecoilValue(userState);
  const [quizCount, setQuizCount] = useState();

  const fetchQuestions = async () => {
    const data = await getQuestionCount();
    setQuizCount(data.quizs);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      <Container>
        <Section>
          <Header>
            <H5>내 프로필</H5>
          </Header>
          <IdContainer>
            <IdText>
              <H5>{user.name}</H5>
              <Email>{user.email}</Email>
            </IdText>
            <IdText>총 문제: {quizCount}</IdText>
            <IdText>추가한 문제: </IdText>
            <IdText>제출한 문제: </IdText>
            <ButtonContainer>
              <AddButton>추가한 문제 가져오기</AddButton>
              <SendButton>제출한 문제 가져오기</SendButton>
            </ButtonContainer>
          </IdContainer>
        </Section>
      </Container>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AddButton = styled.button`
  font-size: 14px;
  width: 180px;
  height: 40px;
  background-color: #ffe400;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  color: #0100ff;
`;

const SendButton = styled.button`
  font-size: 14px;
  width: 180px;
  height: 40px;
  background-color: #e9ecf3;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
`;

const Email = styled.span`
  font-size: 20px;
  color: #5f7f90;
`;

const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
`;

const IdText = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 0.0625rem solid #d7e2eb;
  padding: 0.5rem;
`;

const H5 = styled.h5`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

const Header = styled.div`
  padding: 1rem;
  border-bottom: 0.0625rem solid #d7e2eb;
`;

const Container = styled.div`
  width: 20.625rem;
  box-sizing: border-box;
`;

const Section = styled.section`
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.25rem;
`;

export default Info;
