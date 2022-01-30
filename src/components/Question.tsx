import styled from "styled-components";
import SolveModal from "./Modals/SolveModal";

const Question = ({ question }) => {
  return (
    <>
      <SolveModal question={question} />
    </>
  );
};

export default Question;
