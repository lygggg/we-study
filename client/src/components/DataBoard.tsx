import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../atom/user";
import { checkLogin } from "../firebase/Firebase.js";
import { getQuestionCount } from "../services/Question";

const DataBoard = () => {
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
      <DataContainer>
        <DataText>문제 개수:{quizCount}</DataText>
        {Object.keys(user).length > 0 ? (
          <DataText>이름:{user.name}</DataText>
        ) : (
          <DataText>로그인이 필요합니다</DataText>
        )}
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
