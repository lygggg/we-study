import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { checkLogin } from "../firebase/Firebase.js";
import { getQuestionCount } from "../services/Question";

const DataBoard = () => {
  const [quizCount, setQuizCount] = useState();
  const [userName, setUserName] = useState("로그인 해주세요");

  const fetchQuestions = async () => {
    const data = await getQuestionCount();
    setQuizCount(data.quizs);
  };

  useEffect(() => {
    if (checkLogin()) {
      setUserName(checkLogin().email);
    }
    fetchQuestions();
  }, []);
  return (
    <>
      <DataContainer>
        <DataText>문제 개수:{quizCount}</DataText>
        <DataText>유저아이디:{userName}</DataText>
        <DataText>추가 문제 개수:15</DataText>
        <DataText>해결 문제 개수:20</DataText>
      </DataContainer>
    </>
  );
};

const DataText = styled.div`
  color: #fff;
  font-size: 25px;
`;
const DataContainer = styled.div`
  margin-top: 120px;
  height: 200px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default DataBoard;
