import styled from "styled-components";
import GuideSheet from "../components/layouts/GuideSheet";

const HomePage = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <TopText>문제를 추가하고 공유하자</TopText>
          <MiddleText>
            당신의 지식을 공유하고 함께 학습해 보세요. 자주 물어보는 면접
            질문들을 찾으러 다닐 필요 없이 카테고리별로 문제들을 확인할 수
            있습니다. 내가 생각하는 문제가 없을 경우 문제를 추가해 보세요.
          </MiddleText>
        </InnerContainer>
        <GuideSheet />
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
  min-width: 1000px;
  max-width: 1350px;
`;

const InnerContainer = styled.div`
  margin-top: 60px;
  text-align: -webkit-center;
`;

export default HomePage;
