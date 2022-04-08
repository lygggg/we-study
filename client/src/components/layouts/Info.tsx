import { Link } from "react-router-dom";
import styled from "styled-components";

import { useMe } from "../../hook/useMe";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../../recoilState/user";
import InfoSkeleton from "../skeleton/InfoSkeleton";
import { withSuspense } from "../../hocs";

const Info = () => {
  const user = useMe();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <>
      <Container>
        {user?._id ? (
          <Section>
            <Header>
              <H5>내 프로필</H5>
            </Header>

            <IdContainer>
              <IdText>
                <H5>{user.name}</H5>
                <Email>{user.email}</Email>
              </IdText>
              <IdText>
                총 문제:
                <span className="quiz-total-count">{user.quizCount}</span>
              </IdText>
              <IdText>
                추가한 문제:
                <span className="my-quiz-count">{user.myQuizCount}</span>
              </IdText>
              <IdText>
                소장한 문제:
                <span className="like-quiz-count"> {user.likeQuizCount} </span>
              </IdText>
              <ButtonContainer>
                <StyledLink to={`/addlist`}>
                  <AddButton>추가한 문제 가져오기</AddButton>
                </StyledLink>
                <StyledLink to={`/likelist`}>
                  <SendButton className="get-like-quiz-button">
                    소장한 문제 가져오기
                  </SendButton>
                </StyledLink>
              </ButtonContainer>
            </IdContainer>
          </Section>
        ) : !isLoggedIn ? (
          <></>
        ) : (
          <InfoSkeleton />
        )}
      </Container>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  place-content: center;
  gap: 20px;
`;

const AddButton = styled.button`
  font-size: 13px;
  width: 130px;
  height: 50px;
  background-color: #ffe400;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  color: #0100ff;
`;

const SendButton = styled.button`
  font-size: 13px;
  width: 130px;
  height: 50px;
  background-color: #e9ecf3;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
`;

const Email = styled.span`
  font-size: 20px;
  color: #5f7f90;
`;

const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
`;

const IdText = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 0.0625rem solid #d7e2eb;
  padding: 0.5rem;
`;

const H5 = styled.h5`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

const Header = styled.div`
  padding: 1rem;
  border-bottom: 0.0625rem solid #d7e2eb;
`;

const Container = styled.div`
  box-sizing: border-box;
`;

const Section = styled.section`
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.25rem;
`;

export default withSuspense(Info, <InfoSkeleton />);
