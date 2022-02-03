import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <>
      <Container>
        <Text>
          <StyledLink to="operating">운영체제</StyledLink>
        </Text>
        <Text>
          <StyledLink to="network">네트워크</StyledLink>
        </Text>
        <Text>
          <StyledLink to="Javascript">자바스크립트</StyledLink>
        </Text>
        <Text>
          <StyledLink to="react">React</StyledLink>
        </Text>
        <Text>
          <StyledLink to="datastructure">자료구조</StyledLink>
        </Text>
        <Text>
          <StyledLink to="frontend">프론트엔드 질문</StyledLink>
        </Text>
      </Container>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: #000000;
`;

const Text = styled.div`
  font-size: 20px;
  color: #263747;
`;

const Container = styled.div`
  height: 50px;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px;
  align-items: center;
`;

export default Menu;
