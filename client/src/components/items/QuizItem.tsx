import styled from "styled-components";
import { Quiz } from "../../models/quiz";
import { useRemoveCartQuiz } from "../../hook/useCartQuiz";

interface QuizItemProps {
  quiz: Quiz;
  onClickModal: (quiz: Quiz) => void;
}

const QuizItem = ({ quiz, onClickModal }: QuizItemProps) => {
  const onClickRemoveQuiz = useRemoveCartQuiz(quiz._id);

const QuizItem = ({ quiz }: { quiz: Quiz }) => {
  return (
    <>
      <Img src={quiz.img} />
      <Description>
        <Item dangerouslySetInnerHTML={{ __html: quiz.quizText }}></Item>
        {quiz.user[0].name ? (
          <ItemName>{quiz.user[0].name}</ItemName>
        ) : (
          <ItemName>{quiz.user}</ItemName>
        )}
      </Description>
    </>
        <a onClick={() => onClickRemoveQuiz()}>X</a>
  );
};

const Img = styled.img`
  width: 100px;
`;

const Description = styled.div`
  padding-left: 1.5rem;
`;

const ItemName = styled.h6`
  margin-top: 0;
  color: #98a8b9;
  font-size: 17px;
  margin-bottom: 0.5rem;
`;
const Item = styled.h5`
  margin-top: 0;
  font-size: 20px;
  margin-bottom: 0.5rem;
`;

export default QuizItem;
