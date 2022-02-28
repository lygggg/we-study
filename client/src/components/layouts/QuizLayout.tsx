import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useMe } from "../../hook/useMe";
import QuizItem from "../items/QuizItem";
import MenuStore from "../../stores/MenuStore";
import Modal from "../modals/AddModal";
import SolveModal from "../modals/SolveModal";
import Info from "./Info";
import { Quiz } from "../../models/quiz";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../../recoilState/user";
import ButtonSkeleton from "../skeleton/ButtonSkeleton";
import QuizSkeleton from "../skeleton/QuizSkeleton";

export interface QuizLayout {
  quizList: Quiz[] | undefined;
}

const QuizLayout = ({ quizList }: QuizLayout) => {
  const user = useMe();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigateTo = useNavigate();
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>();

  const onClickModal = (quiz: Quiz) => {
    if (!user) {
      navigateTo("/login");
    }
    setActiveQuiz(quiz);
  };

  return (
    <>
      {user ? (
        <Modal
          category={MenuStore.findCategories(Number(categoryId) as number)}
          categoryId={String(categoryId)}
        />
      ) : !isLoggedIn ? (
        <></>
      ) : (
        <ButtonSkeleton />
      )}
      <Container>
        <QuizContainer className="quiz-container">
          {quizList ? (
            quizList.length > 0 ? (
              <>
                {quizList.map((quiz: Quiz) => (
                  <Inner key={quiz._id} onClick={() => onClickModal(quiz)}>
                    <QuizCotainer>
                      <QuizItem quiz={quiz}></QuizItem>
                    </QuizCotainer>
                  </Inner>
                ))}
              </>
            ) : (
              <Empty>아무런 값도 찾지 못했습니다.</Empty>
            )
          ) : (
            <QuizSkeleton />
          )}
        </QuizContainer>
        <Info />
      </Container>

      {activeQuiz && (
        <SolveModal
          open
          quiz={activeQuiz}
          onClose={() => setActiveQuiz(null)}
        />
      )}
    </>
  );
};

const QuizContainer = styled.div`
  max-width: 1000px;
  flex: 1;
`;
const Empty = styled.div`
  height: 400px;
  width: 800px;
  margin-top: 20px;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const QuizCotainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  margin-top: 60px;
  box-sizing: border-box;
  display: flex;
  place-content: center;
  min-width: 1000px;
  max-width: 1350px;
  padding-left: 100px;
  padding-right: 100px;
  gap: 50px;
`;

const Inner = styled.div`
  flex: 1;
  margin-top: 20px;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
`;

export default QuizLayout;
