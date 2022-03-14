import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userLogOut } from "../../firebase/Firebase";
import { useIsLoggedIn, useMe } from "../../hook/useMe";
import DarkModeToggle from "../items/DarkModeToggle.jsx";
import Menu from "./Menu";
import SearchForm from "../items/SearchForm";

const Header = () => {
  const user = useMe();
  const isLoggedIn = useIsLoggedIn();

  const onLogOutClick = () => {
    userLogOut();
    window.location.href = "/";
  };

  return (
    <>
      <Container>
        <Head>
          <HeadContainer>
            <StyledLink to={`/`}>
              <NameText>We Study</NameText>
            </StyledLink>
            <SearchForm />
            <LoginContainer>
              {isLoggedIn || user ? (
                <div>
                  <LoginText onClick={onLogOutClick}>로그아웃</LoginText>
                </div>
              ) : (
                <StyledLink to={`/login`}>
                  <LoginText className="login">로그인</LoginText>
                </StyledLink>
              )}
            </LoginContainer>
          </HeadContainer>
        </Head>
      </Container>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <DarkModeToggle />
    </>
  );
};

const MenuContainer = styled.div``;
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const HeadContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
`;

const LoginText = styled.div`
  color: #fff;
  font-size: 20px;
`;
const NameText = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;
const Container = styled.header`
  width: 100%;
  height: 90px;
  top: 0;
  left: 0;
  display: flex;
  background-color: #0c151c;
  box-shadow: 0px 2px 6px 0px #00000017;
  position: fixed;
  text-align: -webkit-center;
`;

const Head = styled.div`
  width: 80%;
  heigth: 100%;
  margin: 0 auto;
  padding: 0rem 1rem;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Header;
