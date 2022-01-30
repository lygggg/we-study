import styled from "styled-components";

const LoginPage = () => {
  return (
    <MainDiv>
      <InnerDiv>
        <Title>로그인</Title>
        <Form>
          <Input
            placeholder="아이디를 입력해주세요"
            type="email"
            autoComplete="on"
          />
          <Input
            placeholder="패스워드를 입력해주세요"
            autoComplete="on"
            maxLength="30"
          />

          <InnerButton type="button">
            <LoginButton>로그인</LoginButton>
          </InnerButton>
        </Form>
        <div>
          <InnerButton>
            <Button>회원가입</Button>
          </InnerButton>
        </div>
        <SearchDiv>
          <A>아이디</A>
          <A>/</A>
          <A> 비밀번호 찾기 </A>
        </SearchDiv>
      </InnerDiv>
    </MainDiv>
  );
};

const LoginButton = styled.button`
  color: #ffffff;
  background-color: #0c151c;
  font-size: 19px;
  font-weight: bold;
`;

const InnerDiv = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 550px) {
    max-width: 550px;
  }
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: grid;
  height: 230;
  margin-bottom: 8px;
  justify-items: center;
`;

const InnerButton = styled.div`
  display: grid;
  width: 426px;
  height: 60px;
  grid-gap: 9px;
  margin: 10px;
`;

const SearchDiv = styled.div`
  display: flex;
  height: 60px;
  width: 426px;
  justify-content: end;
`;

const Button = styled.button`
  background: white;
  color: #000000;
  font-weight: bold;
  border: 1px solid black;
  font-weight: bold;
  font-size: 19px;
`;

const A = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #333;
  margin: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 400px;
  height: 60px;
  padding: 0 13px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 11px;
  font-size: 14px;
`;

export default LoginPage;
