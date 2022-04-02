import React, { useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useMe } from "../../hook/useMe";
import QuizItem from "../items/QuizItem";
import { Quiz } from "../../models/quiz";
import QuizSkeleton from "../skeleton/QuizSkeleton";
import Modal from "../modals/AddModal";
import Pagination from "../items/Pagination";
import SolveModal from "../modals/SolveModal";
import LikeModal from "../modals/LikeModal";
import { withSuspense } from "../../hocs";

const MAX_PAGE = 8;

export interface QuizLayout {
  quizList: Quiz[] | undefined;
  totalCount: number;
  fetcher?: () => any;

  onChangePage: (newPage: number) => void;
}
const QuizList = ({ fetcher, onChangePage }: QuizLayout) => {
  const { quizs: quizList, totalCount } = fetcher();
  const user = useMe();
  const navigateTo = useNavigate();
  const { categoryId } = useParams();
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
      <QuizContainer className="quiz-container">
        {user._id && categoryId ? <Modal /> : <></>}
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
              <Pagination
                total={totalCount}
                pageSize={MAX_PAGE}
                onPageChange={onChangePage}
                categoryId={categoryId}
              />
            </>
          ) : (
            <Empty>아무런 값도 찾지 못했습니다.</Empty>
          )
        ) : (
          <QuizSkeleton />
        )}
      </QuizContainer>
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
const Inner = styled.li`
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
`;

export default withSuspense(QuizList, <QuizSkeleton />);
