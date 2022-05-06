import { useState, useRef } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { Quiz } from "../../models/quiz";

interface SolveModalProps {
  open: boolean;
  onClose: any;
  quiz: Quiz;
}

const SolveModal = ({ open, quiz, onClose }: SolveModalProps) => {
  const [hide, setHide] = useState<boolean>(false);
  const answerRef = useRef(null);

  return (
    <Popup
      modal={true}
      open={open}
      contentStyle={{
        width: "600px",
        height: "660px",
        backgroundColor: "#FFFFFF",
      }}
      onClose={onClose}
    >
      {(close: () => void) => (
        <>
          <Container>
            <Title>
              <CloseButton onClick={close}>X</CloseButton>
              <Inner
                dangerouslySetInnerHTML={{ __html: quiz.quizText }}
              ></Inner>
            </Title>
            <PaddingContainer>
              <TableContainer>
                <div>
                  <H4>정답 입력</H4>
                  <div>
                    <AnwserTextarea
                      className="quiz-answer"
                      maxLength={230}
                      placeholder="정답을 입력하세요."
                      ref={answerRef}
                    />
                  </div>
                </div>
                <div>
                  <H4
                    className="open-quiz-answer"
                    onClick={() => setHide(true)}
                  >
                    정답 확인 클릭
                  </H4>
                  {hide && (
                    <AnswerText
                      className="quiz-answer"
                      dangerouslySetInnerHTML={{
                        __html: quiz.answerText,
                      }}
                    ></AnswerText>
                  )}
                </div>
              </TableContainer>
            </PaddingContainer>
            <ButtonContainer>
              <SendButton
                onClick={() => {
                  close();
                }}
              >
                제출하기
              </SendButton>
            </ButtonContainer>
          </Container>
        </>
      )}
    </Popup>
  );
};

const AnwserTextarea = styled.textarea`
  height: 280px;
  width: 100%;
  font-size: 15px;
  color: white;
  background: #282c35;
`;

const SendButton = styled.button`
  font-size: 17px;
  margin-top: 90px;
  height: 60px;
  width: 216px;
  background: #0c151c;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const PaddingContainer = styled.div`
  padding: 14px;
`;

const TableContainer = styled.div`
  height: 380px;
  border-top: 2px solid;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  background: #353535;
`;

const CloseButton = styled.button`
  background: #ffe400;
  border: 0;
  float: right;
`;

const Title = styled.div`
  height: 120px;
  background: #ffe400;
`;

const Inner = styled.div`
  background: #ffe400;
  color: #000000;
  padding: 14px;
  display: flex;
  font-size: 25px;
  height: 70px;
  align-items: center;
`;

const H4 = styled.h4`
  font-size: 25px;
  margin-bottom: 10px;
  color: #ffffff;
`;

const AnswerText = styled.div`
  color: #ffffff;
`;

export default SolveModal;
