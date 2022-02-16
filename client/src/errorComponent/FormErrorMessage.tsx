import { StyledFormErrorMessage } from "./ErrorStyle";

type FormErrorMessage = {
  errorMessage: string;
};
const FormErrorMessage = ({ errorMessage }: FormErrorMessage) => {
  return <StyledFormErrorMessage>{errorMessage}</StyledFormErrorMessage>;
};

export default FormErrorMessage;
