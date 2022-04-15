import styled from "styled-components";
import { useVisible } from "../../hook/useVisible";
import { useRemoveQuiz } from "../../hook/useQuizs";
import ModifyModal from "./ModifyModal";

const QuizDropDown = ({ quiz, quizId }) => {
  const [ref, isVisible, setIsVisible] = useVisible(false);
  const removeQuiz = useRemoveQuiz(quizId);

  return (
    <Container>
      <div className="quiz-option-modal">
        <OptionImg onClick={() => setIsVisible(!isVisible)}>☰</OptionImg>
      </div>
      {isVisible && (
        <UlContainer ref={ref}>
          <ul>
            <li className="remove-quiz" onClick={() => removeQuiz.mutate()}>
              삭제
            </li>
            <ModifyModal
              onClick={() => setIsVisible(!isVisible)}
              modalRef={ref}
              quiz={quiz}
            />
          </ul>
        </UlContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: auto;
`;

const UlContainer = styled.div`
  z-index: 1;
  width: 80px;
  position: absolute;
  left: -50px;
  top: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  & li {
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    place-content: center;
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

const OptionImg = styled.div`
  height: 15px;
  width: 15px;
  position: relative;
`;

export default QuizDropDown;
