import React from "react";
import styled from "styled-components";
import Info from "./Info";
import QuizList from "../containers/QuizList";
import { withErrorBoundary } from "../../hocs";

export interface QuizLayout {
  fetcher?: () => any;

  onChangePage: (newPage: number) => void;
}
const QuizLayout = ({ fetcher, onChangePage }: QuizLayout) => {
  return (
    <Container>
      <QuizList fetcher={fetcher} onChangePage={onChangePage} />
      <Info />
    </Container>
  );
};

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

export default React.memo(withErrorBoundary(QuizLayout));
