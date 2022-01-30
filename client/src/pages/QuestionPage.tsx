import styled from "styled-components";
import QuestionList from "../components/QuestionList";

const QuestionPage = () => {
  return (
    <>
      <Container>
        <QuestionList />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 60px;
`;

export default QuestionPage;
