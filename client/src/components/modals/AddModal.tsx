import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { useAddQuiz } from "../../hook/useAddQuiz";

const AddModal = () => {
  const [quizText, setQuizText] = useState<string>("");
  const [answerText, setAnswerText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const titleRef = useRef(null);
  const answerRef = useRef(null);

  const onChange = () => {
    setQuizText(titleRef.current.value);
    setAnswerText(answerRef.current.value);
  };

  const onClickAddQuiz = useAddQuiz({
    category,
    quizText,
    answerText,
  });
  return (
    <Popup
      modal={true}
      contentStyle={{
        width: "600px",
        height: "600px",
        backgroundColor: "#FFFFFF",
      }}
      trigger={<AddButton className="add-quiz">퀴즈 추가</AddButton>}
    >
      {(close: () => void) => (
        <>
          <Container>
            <Title>
              <CloseButton onClick={close}>X</CloseButton>
              <Inner>{category} 퀴즈</Inner>
              <MenuContainer>
                <Menu
                  className="add-menu-os"
                  onClick={() => setCategory("운영체제")}
                >
                  운영체제
                </Menu>
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
            <TableContainer>
              <TitleTextarea
                className="quiz-body"
                placeholder="제목을 입력하세요."
                maxLength={55}
                ref={titleRef}
              />
              <AnwserTextarea
                className="quiz-answer"
                maxLength={230}
                placeholder="정답을 입력하세요."
                ref={answerRef}
              />
            </TableContainer>
            <ButtonContainer>
              <SendButton
                className="quiz-submit"
                onClick={async () => {
                  await onChange();
                  await onClickAddQuiz();
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

const TableContainer = styled.div`
  height: 380px;
  padding: 20px;
`;

const Container = styled.div`
  background: #282c35;
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
