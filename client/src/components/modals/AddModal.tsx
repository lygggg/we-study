import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../atom/user";
import { questionState } from "../../atom/question";

import { CreateQuestion } from "../../services/Question";

const AddModal = ({ category, categoryId }) => {
  const user = useRecoilValue(userState);
  const setQuestion = useSetRecoilState(questionState);
  const [quizText, setQuizText] = useState("");
  const [answerText, setAnswerText] = useState("");

  const onClickAddQuiz = async () => {
    const id = user._id;
    await CreateQuestion({
      quizText,
      answerText,
      category: categoryId,
      id,
    });
    setQuizText("");
    setAnswerText("");
    setQuestion(quizText);
  };

  return (
    <Popup
      modal={true}
      contentStyle={{
        width: "840px",
        height: "660px",
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
                    <Qtr>
                      <Qth>문제</Qth>
                      <Qtd>
                        <Textarea
                          value={quizText}
                          maxLength="200"
                          onChange={(v) => setQuizText(v.target.value)}
                        ></Textarea>
                      </Qtd>
                    </Qtr>
                    <Qtr>
                      <Qth>정답</Qth>
                      <Qtd>
                        <Textarea
                          value={answerText}
                          maxLength="200"
                          onChange={(v) => setAnswerText(v.target.value)}
                        ></Textarea>
                      </Qtd>
                    </Qtr>
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
`;
const PaddingContainer = styled.div`
  padding: 14px;
`;

const TableContainer = styled.div`
  height: 380px;
  border-top: 2px solid;
  padding: 8px;
`;

const Textarea = styled.textarea`
  height: 190px;
  width: 650px;
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
  padding: 20px;
`;

const Qtr = styled.tr`
  border-bottom: 1px solid #ddd;
  height: 160px;
`;

const Qth = styled.th`
  border-right: 1px solid #ddd;
  padding: 10px;
`;
export default AddModal;
