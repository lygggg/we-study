import styled from "styled-components";
import { Quiz } from "../../models/quiz";

interface QuizItemProps {
  quiz: Quiz;
  onClickModal: (quiz: Quiz) => void;
  onClickLike: (quiz: Quiz) => void;
}

const QuizItem = ({ quiz, onClickModal, onClickLike }: QuizItemProps) => {
  return (
    <Container>
      <FlexContainer className="quiz-item">
        <Img src={quiz.img} />
        <Description>
          <Item
            onClick={() => onClickModal(quiz)}
            dangerouslySetInnerHTML={{ __html: quiz.quizText }}
          ></Item>
          {quiz.user[0].name ? (
            <ItemName>{quiz.user[0].name}</ItemName>
          ) : (
            <ItemName>{quiz.user}</ItemName>
          )}
        </Description>
      </FlexContainer>
      <LikeContainer>
        {!!quiz?.like ? (
          <>
            <a onClick={() => onClickLike(quiz)}>
              ❤️
              {quiz.likeCount}
            </a>
          </>
        ) : (
          <>
            <a onClick={() => onClickLike(quiz)}>
              🤍
              {quiz.likeCount}
            </a>
          </>
        )}
        <OptionImg src="../../../assets/imgs/zum.png"></OptionImg>
      </LikeContainer>
    </Container>
  );
};

const OptionImg = styled.img`
  height: 15px;
  width: 15px;
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align-last: center;
  gap: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h6`
  margin-top: 0;
  color: #98a8b9;
  font-size: 17px;
  margin-bottom: 0.5rem;
`;
const Item = styled.a`
  font-weight: bold;
  margin-top: 0;
  font-size: 20px;
  margin-bottom: 0.5rem;
`;

export default QuizItem;
