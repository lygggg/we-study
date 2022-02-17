import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { Quiz } from "../../models/quiz";
import Editor from "./Editor";

interface SolveModalProps {
  open: boolean;
  onClose: any;
  question: Quiz;
}

const SolveModal = ({ open, question, onClose }: SolveModalProps) => {
  const [text, setText] = useState("");
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
      {(close) => (
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
                <table>
                  <tbody>
                    <Qtr>
                      <Qth>정답 입력</Qth>
                      <Qtd>
                        <Editor value={text} onChange={setText} />
                      </Qtd>
                    </Qtr>
                    <Qtr>
                      <Qth>정답 확인 클릭</Qth>
                      <Qtd
                        dangerouslySetInnerHTML={{
                          __html: question.answerText,
                        }}
                      ></Qtd>
                    </Qtr>
                  </tbody>
                </table>
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
  text-align: center;
  border-left: 2px solid #eaeaea;
  border-right: 2px solid #eaeaea;
  border-bottom: 2px solid #eaeaea;
`;

const PaddingContainer = styled.div`
  padding: 14px;
  border-left: 2px solid #eaeaea;
  border-right: 2px solid #eaeaea;
`;

const TableContainer = styled.div`
  height: 380px;
  border-top: 2px solid;
  padding: 8px;
`;

const Textarea = styled.textarea`
  height: 240px;
  width: 650px;
`;

const Container = styled.div`
  background-color: #ffffff;
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
  padding: 14px;
  display: flex;
  font-size: 25px;
  height: 70px;
  align-items: center;
`;

const Qtd = styled.td`
  width: 500px;
  padding: 20px;
`;

const Qtr = styled.tr`
  border-bottom: 1px solid #ddd;
  height: 160px;
`;

const Qth = styled.th`
  padding: 10px;
`;

export default SolveModal;
