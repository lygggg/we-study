import { StyledFormErrorMessage } from "./ErrorStyle";

const FailSignError = () => {
  return (
    <StyledFormErrorMessage>
      회원가입에 실패했습니다. 해당 이메일이 이미 존재합니다.
    </StyledFormErrorMessage>
  );
};

export default FailSignError;
