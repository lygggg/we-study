import * as ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

interface Editor {
  value: string;
  onChange: (x: string) => void;
}

const Editor = ({ value, onChange }: Editor) => {
  return (
    <>
      <Container>
        <ReactQuill
          style={{ height: 200, width: 800, color: "#FFFFFF" }}
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
