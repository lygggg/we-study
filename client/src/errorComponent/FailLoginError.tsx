import { StyledFormErrorMessage } from "./ErrorStyle";

const FailLoginError = () => {
  return (
    <StyledFormErrorMessage>
      이메일 또는 패스워드를 잘못 입력하셨습니다.
    </StyledFormErrorMessage>
  );
};

export default FailLoginError;
