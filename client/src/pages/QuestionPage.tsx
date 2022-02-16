import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { questionState } from "../atom/question";
import { getQuestion } from "../services/Question";
import { useMe } from "../hook/useMe";
import MenuStore from "../stores/MenuStore";
import QuestionLayout from "../components/layouts/QuestionLayout";
import Modal from "../components/modals/AddModal";
import GetError from "../errorComponent/GetError";

const QuestionPage = () => {
  const user = useMe();
  const [error, setError] = useState();
  const value = useRecoilValue(questionState);
  const { categoryId } = useParams();
  const [questionList, setQuestionList] = useState([]);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestion({
        category: categoryId,
      });
      setQuestionList(data.quizs);
      setError(null);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [categoryId]);

  useEffect(() => {
    fetchQuestions();
  }, [value]);

  return (
    <>
      <Container>
        {!!error ? (
          <GetError fetchQuestions={fetchQuestions} />
        ) : (
          <>
            {Object.keys(user).length ? (
              <Modal
                category={MenuStore.categories[categoryId]}
                categoryId={categoryId}
              />
            ) : (
              <></>
            )}

            <QuestionLayout questionList={questionList} />
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 60px;
`;

export default QuestionPage;
