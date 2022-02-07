import React from "react";
import styled from "styled-components";

type FormErrorMessage = {
  errorMessage: string;
};

const StyledFormErrorMessage = styled.div`
  color: #ff4848;
  text-align-last: center;
  font-size: 17px;
`;

const FormErrorMessage = ({ errorMessage }: FormErrorMessage) => {
  return <StyledFormErrorMessage>{errorMessage}</StyledFormErrorMessage>;
};

export default FormErrorMessage;
