import styled from "styled-components";

const HomePage = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <TopText>문제를 추가하고 공유하자</TopText>
          <MiddleText>
            당신의 지식을 공유하고 함께 학습해보세요. 파이팅입니다 당신의 지식을
            공유하고 함께 학습해보세요. 파이팅입니다당신의 지식을 공유하고 함께
            학습해보세요. 파이팅입니다당신의 지식을 공유하고 함께 학습해보세요.
            파이팅입니다
          </MiddleText>
          <div>유저닉네임:</div>
          <div>추가 문제 개수:</div>
          <div>해결 문제 개수:</div>
        </InnerContainer>
      </Container>
    </>
  );
};

const TopText = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #0078ff;
`;
const MiddleText = styled.div`
  margin-top: 35px;
  line-height: 1.6;
  font-size: 32px;
  font-weight: 700;
  width: 70%;
`;

const Container = styled.div`
  margin-top: 60px;
`;

const InnerContainer = styled.div`
  margin-top: 60px;
  text-align: -webkit-center;
`;

export default HomePage;
