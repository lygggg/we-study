import styled from "styled-components";

function QuestionItem({ question }) {
  return (
    <>
      <Img src={"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"} />
      <Description>
        <Item>{question.quizText}</Item>
        <ItemName>{question.user[0].name}</ItemName>
      </Description>
    </>
  );
}

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
