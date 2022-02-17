import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;
const Spinner = () => {
  return (
    <Container>
      <ClipLoader size={100} color="#CC3D3D" />
    </Container>
  );
};

export default Spinner;
