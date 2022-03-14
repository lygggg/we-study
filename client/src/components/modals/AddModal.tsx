import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import Editor from "./Editor";
import { useAddQuiz } from "../../hook/useAddQuiz";

const AddModal = () => {
  const [quizText, setQuizText] = useState<string>("");
  const [answerText, setAnswerText] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const onClickAddQuiz = useAddQuiz({
    category,
    quizText,
    answerText,
    setQuizText,
    setAnswerText,
  });

  return (
    <Popup
      modal={true}
      contentStyle={{
        width: "600px",
        height: "740px",
        backgroundColor: "#FFFFFF",
      }}
      trigger={<AddButton className="add-quiz">질문 추가</AddButton>}
    >
      {(close: () => void) => (
        <>
          <Container>
            <Title>
              <CloseButton onClick={close}>X</CloseButton>
              <Inner>{category} 질문 추가</Inner>
              <MenuContainer>
                <Menu onClick={() => setCategory("운영체제")}>운영체제</Menu>
                <Menu onClick={() => setCategory("네트워크")}>네트워크</Menu>
                <Menu onClick={() => setCategory("자바스크립트")}>
                  자바스크립트
                </Menu>
                <Menu onClick={() => setCategory("React")}>React</Menu>
                <Menu onClick={() => setCategory("자료구조")}>자료구조</Menu>
                <Menu onClick={() => setCategory("프론트엔드")}>
                  프론트엔드
                </Menu>
              </MenuContainer>
            </Title>
            <PaddingContainer>
              <TableContainer>
                <div>
                  <H4>문제</H4>
                  <div>
                    <Textarea
                      className="quiz-body"
                      placeholder="제목을 입력하세요."
                      maxLength={20}
                      value={quizText}
                      onChange={(v) => setQuizText(v.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <H4>정답</H4>
                  <div>
                    <Editor
                      className="quiz-answer"
                      value={answerText}
                      onChange={setAnswerText}
                    />
                  </div>
                </div>
              </TableContainer>
            </PaddingContainer>
            <ButtonContainer>
              <SendButton
                className="quiz-submit"
                onClick={async () => {
                  if (await onClickAddQuiz()) {
                    close();
                  }
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

const Menu = styled.button`
  color: black;
  font-weight: 500;
  flex: 1;
  font-size: 13px;
  height: 30px;
  border-radius: 10px;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 13px;
  padding: 14px;
  text-align: center;
  align-items: center;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 100px;
  font-size: 15px;
`;

const H4 = styled.h4`
  font-size: 25px;
  margin-bottom: 10px;
  color: #ffffff;
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
  margin-top: 9rem;
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

const AddButton = styled.button`
  color: black;
  background: rgb(255, 214, 51);
  height: 44px;
  font-size: 16px;
  width: 100px;
  border-radius: 4px;
  font-weight: 500px;
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

export default AddModal;
