import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/layouts/Header";
import SignUpPage from "./pages/SignUpPage";
import SearchPage from "./pages/SearchPage";
import AddQuizListPage from "./pages/AddQuizListPage";
import CartQuizListPage from "./pages/CartQuizListPage";
import "./App.css";
import SignSuccessPage from "./pages/SignSuccessPage";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./global-styles";
import { useDarkMode } from "../src/hook/useDarkMode";
import { useRefreshMe } from "./hook/useMe";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "./recoilState/user";

export const ThemeContext = createContext({
  theme: darkTheme,
  setToggleTheme: () => {},
});

const App = () => {
  const [theme, setToggleTheme] = useDarkMode();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const refreshMe = useRefreshMe();

  useEffect(() => {
    getAuth().onAuthStateChanged(async (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
      if (!user) {
        setIsLoggedIn(false);
        return;
      }

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + (await user.getIdToken()); // Bearer는 JWT 인증방식 표시
      refreshMe();
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setToggleTheme }}>
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/signup/success" element={<SignSuccessPage />} />
              <Route
                path="/categories/:categoryId/page/:pageNum"
                element={<QuizPage />}
              />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/addlist" element={<AddQuizListPage />} />
              <Route path="/cartList" element={<CartQuizListPage />} />
            </Routes>
          </Container>
        </React.Fragment>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    max-width: 1300px;
  }
`;
export default App;
