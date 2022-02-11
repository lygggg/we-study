import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../atom/user";
import { checkLogin, userLogOut } from "../firebase/Firebase.js";
import Menu from "./Menu";
import SearchForm from "./SearchForm";

const Header = () => {
  const user = useRecoilValue(userState);
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
            {checkLogin() ? (
              <div>
                <LoginText onClick={onLogOutClick}>로그아웃</LoginText>
              </div>
            ) : (
              <StyledLink to={`/login`}>
                <LoginText>로그인</LoginText>
              </StyledLink>
            )}
          </HeadContainer>
        </Head>
      </Container>
      <Menu />
      <SearchForm />
    </>
  );
};

const HeadContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  height: 60px;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  background-color: #0c151c;
  box-shadow: 0px 2px 6px 0px #00000017;
  position: fixed;
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
  color: #000000;
`;

export default Header;
