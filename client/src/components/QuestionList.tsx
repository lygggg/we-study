import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuestionStore from "../stores/QuestionStore";
import { getQuestion } from "../services/Question";
import Question from "./Question";
import Modal from "./Modals/AddModal";

const QuestionList = () => {
  const [questionList, setQuestionList] = useState([]);

  const fetchQuestions = async () => {
    const data = await QuestionStore.getQuestions();
    const data1 = await getQuestion();
    console.log(data1);
    setQuestionList(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <>
      <Modal />
      <Container>
        {questionList.map((question) => (
          <Inner key={question.id}>
            <div>
              <Question question={question}></Question>
            </div>
          </Inner>
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const Inner = styled.div`
  height: 100px;
  margin-top: 20px;
  border-top: 0.1px solid #d7e2eb;
  border-bottom: 0.1px solid #d7e2eb;
  display: flex;
  align-items: center;
  place-content: center;
`;

export default QuestionList;
