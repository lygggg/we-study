import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { useAddQuiz } from "../../hook/useAddQuiz";

const ModifyModal = ({ onClick, modalRef, quiz }) => {
  const [quizText, setQuizText] = useState<string>(quiz.quizText);
  const [answerText, setAnswerText] = useState<string>(quiz.answerText);

  return (
    <Popup
      modal={true}
      contentStyle={{
        width: "600px",
        height: "600px",
        backgroundColor: "#FFFFFF",
      }}
      trigger={<li>수정</li>}
      onClose={onClick}
    >
      {(close: () => void) => (
        <>
          <Container ref={modalRef}>
            <TableContainer>
              <TitleTextarea
                className="quiz-body"
                placeholder="제목을 입력하세요."
                maxLength={20}
                value={quizText}
                onChange={(v) => setQuizText(v.target.value)}
              />
              <AnwserTextarea
                maxLength={100}
                placeholder="정답을 입력하세요."
                value={answerText}
                onChange={(v) => setAnswerText(v.target.value)}
              />
            </TableContainer>
            <ButtonContainer>
              <SendButton className="quiz-submit">확인</SendButton>
            </ButtonContainer>
          </Container>
        </>
      )}
    </Popup>
  );
};

const AnwserTextarea = styled.textarea`
  height: 100%;
  width: 100%;
  font-size: 15px;
  color: white;
  background: #282c35;
`;
const TitleTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 40px;
  font-size: 15px;
  color: white;
  background: #282c35;
`;

const SendButton = styled.button`
  font-size: 17px;
  height: 50px;
  width: 216px;
  background: #0c151c;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 7rem;
`;

const TableContainer = styled.div`
  height: 430px;
  padding: 20px;
  text-align: center;
`;

const Container = styled.div`
  background: #282c35;
`;

export default ModifyModal;
