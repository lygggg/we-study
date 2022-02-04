import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import SignUpPage from "./pages/SignUpPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/categories/:categoryId/page/:pageNum"
              element={<QuestionPage />}
            />
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
