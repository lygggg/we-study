import ReactLoading from "react-loading";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  flex-direction: column;
  min-width: 1000px;
  max-width: 1350px;
}

`;
const Loading = () => {
  return (
    <Container>
      <ReactLoading type="spin" height={130} width={110} />
      <div>로딩중입니다.</div>
    </Container>
  );
};

export default Loading;
