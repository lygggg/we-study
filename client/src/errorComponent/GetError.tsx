import styled from "styled-components";

const GetError = (fetchQuestions) => {
  return (
    <Container>
      <InnerContainer>
        <H1>404 ERROR</H1>
        <h2>죄송합니다 페이지를 찾을 수 없습니다.</h2>
        <ButtonContainer>
          <RestartButton onClick={fetchQuestions}>
            재시도 하시겠습니까?
          </RestartButton>
          <HomeButton>메인 페이지로 이동</HomeButton>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
};

const H1 = styled.h1`
  font-size: 60px;
`;

const Container = styled.div`
  display: flex;
  place-content: center;
  text-align: center;
`;

const RestartButton = styled.button`
  font-size: 19px;
  width: 190px;
  height: 40px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #bdbdbd;
  border: 0;
`;

const HomeButton = styled.button`
  font-size: 19px;
  width: 190px;
  height: 40px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #191919;
  border: 0;
`;

const InnerContainer = styled.section``;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default GetError;
