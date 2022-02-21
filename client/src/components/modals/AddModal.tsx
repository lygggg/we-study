import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import Editor from "./Editor";
import { useAddQuiz } from "../../hook/useAddQuiz";

interface AddModalProps {
  category: String;
  categoryId: String | Number;
}

const AddModal = ({ category, categoryId }: AddModalProps) => {
  const [quizText, setQuizText] = useState<String>("");
  const [answerText, setAnswerText] = useState<String>("");

  const onClickAddQuiz = useAddQuiz({
    categoryId,
    quizText,
    answerText,
    setQuizText,
    setAnswerText,
  });

  return (
    <Popup
      modal={true}
      contentStyle={{
        width: "840px",
        height: "760px",
        backgroundColor: "#FFFFFF",
      }}
      trigger={<AddButton>질문 추가</AddButton>}
    >
      {(close) => (
        <>
          <Container>
            <Title>
              <CloseButton onClick={close}>X</CloseButton>
              <Inner>{category} 질문 추가</Inner>
            </Title>
            <PaddingContainer>
              <TableContainer>
                <table>
                  <tbody>
                    <tr>
                      <Qth>문제</Qth>
                      <Qtd>
                        <Editor value={quizText} onChange={setQuizText} />
                      </Qtd>
                    </tr>
                    <tr>
                      <Qth>정답</Qth>
                      <Qtd>
                        <Editor value={answerText} onChange={setAnswerText} />
                      </Qtd>
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </PaddingContainer>
            <ButtonContainer>
              <SendButton
                onClick={() => {
                  onClickAddQuiz();
                  close();
                }}
              >
                확인
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
  margin-top: 4rem;
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
  background-color: #ffffff;
`;

const AddButton = styled.button`
  color: #007bff;
  background: #ffffff;
  height: 50px;
  font-size: 19px;
  width: 150px;
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
  height: 40px;
`;

const Qth = styled.th`
  padding: 13px;
`;
export default AddModal;
