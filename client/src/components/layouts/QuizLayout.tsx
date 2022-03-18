import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMe, useIsLoggedIn } from "../../hook/useMe";
import QuizItem from "../items/QuizItem";
import SolveModal from "../modals/SolveModal";
import Info from "./Info";
import { Quiz } from "../../models/quiz";
import LikeModal from "../modals/LikeModal";
import QuizSkeleton from "../skeleton/QuizSkeleton";
import Modal from "../modals/AddModal";
import ButtonSkeleton from "../skeleton/ButtonSkeleton";

export interface QuizLayout {
  quizList: Quiz[] | undefined;
}

const QuizLayout = ({ quizList }: QuizLayout) => {
  const user = useMe();
  const isLoggedIn = useIsLoggedIn();
  const navigateTo = useNavigate();
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>();
  const [likeQuiz, setLikeQuiz] = useState<Quiz | null>();

  const onClickModal = (quiz: Quiz) => {
    if (!user) {
      navigateTo("/login");
    }
    setActiveQuiz(quiz);
  };

  const onClickLike = (quiz: Quiz) => {
    if (!user) {
      navigateTo("/login");
    }
    setLikeQuiz(quiz);
  };

  return (
    <>
      <Container>
        <QuizContainer className="quiz-container">
          {user ? <Modal /> : !isLoggedIn ? <></> : <ButtonSkeleton />}
          {quizList ? (
            quizList.length > 0 ? (
              <>
                {quizList.map((quiz: Quiz) => (
                  <Inner key={quiz._id}>
                    <QuizItem
                      quiz={quiz}
                      onClickModal={onClickModal}
                      onClickLike={onClickLike}
                    ></QuizItem>
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
      {likeQuiz && (
        <LikeModal open quiz={likeQuiz} onClose={() => setLikeQuiz(null)} />
      )}
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

const QuizContainer = styled.ul`
  max-width: 736px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;
const Empty = styled.div`
  height: 400px;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const Container = styled.div`
  margin-top: 140px;
  box-sizing: border-box;
  display: flex;
  place-content: center;
  min-width: 1000px;
  max-width: 1350px;
  padding-left: 100px;
  padding-right: 100px;
  gap: 50px;
`;

const Inner = styled.li`
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
`;

export default React.memo(QuizLayout);
