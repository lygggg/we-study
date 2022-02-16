import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { getAuth } from "firebase/auth";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { userState } from "./atom/user";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import SignUpPage from "./pages/SignUpPage";
import SearchPage from "./pages/SearchPage";
import { getUser } from "./services/Login";
import "./App.css";

function App() {
  const setUser = useSetRecoilState(userState);

  const saveUserData = async (userData) => {
    const data = await getUser(userData.email);
    setUser(data.user);
  };

  useEffect(() => {
    getAuth().onAuthStateChanged(async (user) => {
      if (!user) return;

      // axios.defaults.headers.common["Authorization"] =
      //   "Bearer " + (await user.getIdToken());
      saveUserData(user);
    });
  }, []);

  return (
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
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    max-width: 1300px;
  }
`;
export default App;
