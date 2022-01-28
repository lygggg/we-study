import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import QuestionPage from "./pages/QuestionPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<QuestionPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
export default App;
