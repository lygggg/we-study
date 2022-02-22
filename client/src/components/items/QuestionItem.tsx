import styled from "styled-components";
import { Quiz } from "../../models/quiz";

const QuestionItem = ({ question }: { question: Quiz }) => {
  return (
    <>
      <Img src={question.img} />
      <Description>
        <Item dangerouslySetInnerHTML={{ __html: question.quizText }}></Item>
        {question.user[0].name ? (
          <ItemName>{question.user[0].name}</ItemName>
        ) : (
          <ItemName>{question.user}</ItemName>
        )}
      </Description>
    </>
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

export default QuestionItem;
