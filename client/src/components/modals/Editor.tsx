import React, { useState } from "react";
import * as ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const Editor = ({ value, onChange }) => {
  return (
    <>
      <Container>
        <ReactQuill
          style={{ height: 200, width: 740 }}
          theme="snow"
          value={value}
          onChange={onChange}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-bottom: 60px;
`;

export default Editor;
