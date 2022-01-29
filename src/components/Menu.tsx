import styled from "styled-components";

const Menu = () => {
  return (
    <>
      <Container>
        <Text>운영체제</Text>
        <Text>네트워크</Text>
        <Text>자바스크립트</Text>
        <Text>React</Text>
        <Text>자료구조</Text>
      </Container>
    </>
  );
};

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
