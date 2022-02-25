import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { Quiz } from "../../models/quiz";
import Editor from "./Editor";
import { createQuizCart } from "../../services/QuizCart";

interface SolveModalProps {
  open: boolean;
  onClose: any;
  question: Quiz;
}

const SolveModal = ({ open, question, onClose }: SolveModalProps) => {
  const [text, setText] = useState<string>("");
  const [hide, setHide] = useState<boolean>(false);

  const onClickCartQuiz = async () => {
    try {
      await createQuizCart({ quizId: question._id });
    } catch (e) {
      alert("이미 소장한 퀴즈입니다.");
    }
  };

  return (
    <Popup
      modal={true}
      open={open}
      contentStyle={{
        width: "840px",
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
                dangerouslySetInnerHTML={{ __html: question.quizText }}
              ></Inner>
            </Title>
            <PaddingContainer>
              <TableContainer>
                <div>
                  <H4>정답 입력</H4>
                  <div>
                    <Editor value={text} onChange={setText} />
                  </div>
                </div>
                <div>
                  <H4 onClick={() => setHide(true)}>정답 확인 클릭</H4>
                  {hide && (
                    <AnswerText
                      dangerouslySetInnerHTML={{
                        __html: question.answerText,
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

              <SaveButton onClick={onClickCartQuiz}>소장하기</SaveButton>
            </ButtonContainer>
          </Container>
        </>
      )}
    </Popup>
  );
};

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

const SaveButton = styled.button`
  font-size: 17px;
  margin-top: 90px;
  height: 60px;
  width: 216px;
  background: #8c8c8c;
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
