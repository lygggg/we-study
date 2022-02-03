import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getQuestion } from "../services/Question";
import MenuStore from "../stores/MenuStore";
import Question from "./Question";
import Modal from "./Modals/AddModal";

const QuestionList = () => {
  const { categoryId } = useParams();
  const [questionList, setQuestionList] = useState([]);

  const fetchQuestions = async () => {
    const data = await getQuestion({
      category: categoryId,
    });
    setQuestionList(data.quizs);
  };

  useEffect(() => {
    fetchQuestions();
  }, [categoryId]);

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
