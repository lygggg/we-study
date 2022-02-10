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
      contentStyle={{ width: "640px", height: "460px" }}
      trigger={<AddButton>질문 추가</AddButton>}
    >
      {(close) => (
        <>
          <Container>
            <Title>
              <OnButton onClick={close}>X</OnButton>
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
              <OkButton
                onClick={() => {
                  onClickAddQuiz();
                  close();
                }}
              >
                확인
              </OkButton>
            </ButtonContainer>
          </Container>
        </>
      )}
    </Popup>
  );
};

const OkButton = styled.button`
  font-size: 17px;
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
  height: 140px;
  width: 460px;
`;
const Container = styled.div`
  background-color: #eeeeee;
`;

const AddButton = styled.button`
  color: #fff;
  background: #0c151c;
  alignself: center;
  height: 50px;
  align-self: center;
`;

const OnButton = styled.button`
  float: right;
`;

const Title = styled.div`
  height: 65px;
  background: #eee;
`;

const Inner = styled.div`
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
