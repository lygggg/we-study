import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useMe } from "../../hook/useMe";
import Question from "../items/QuestionItem";
import MenuStore from "../../stores/MenuStore";
import Modal from "../../components/modals/AddModal";
import SolveModal from "../modals/SolveModal";
import Info from "./Info";
import { Quiz } from "../../models/quiz";

export interface QuestionLayout {
  questionList: Array<Quiz>;
}

const QuestionLayout = ({ questionList }: QuestionLayout) => {
  const user = useMe();
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigateTo = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState<Quiz | null>();

  const onClickModal = (question: Quiz) => {
    if (!user) {
      navigateTo("/login");
    }
    setActiveQuestion(question);
  };

  return (
    <>
      {user ? (
        <Modal
          category={MenuStore.findCategories(Number(categoryId) as number)}
          categoryId={String(categoryId)}
        />
      ) : (
        <></>
      )}
      <Container>
        <QuestionContainer>
          {questionList.length > 0 ? (
            <>
              {questionList.map((question: Quiz) => (
                <Inner
                  key={question._id}
                  onClick={() => onClickModal(question)}
                >
                  <QuestionCotainer>
                    <Question question={question}></Question>
                  </QuestionCotainer>
                </Inner>
              ))}
            </>
          ) : (
            <Empty>아무런 값도 찾지 못했습니다.</Empty>
          )}
        </QuestionContainer>
        <Info />
      </Container>

      {activeQuestion && (
        <SolveModal
          open
          question={activeQuestion}
          onClose={() => setActiveQuestion(null)}
        />
      )}
    </>
  );
};

const QuestionContainer = styled.div`
  padding-right: 1.5rem;
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

const QuestionCotainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  margin-top: 60px;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  max-width: 1350px;
  padding-left: 100px;
  padding-right: 100px;
  grid-template-columns: 1fr 300px;
`;

const Inner = styled.div`
  flex: 1;
  margin-top: 20px;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
`;

export default QuestionLayout;
