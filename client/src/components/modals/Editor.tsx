import * as ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

interface Editor {
  className?: string;
  value: string;
  onChange: (x: string) => void;
}

const Editor = ({ className, value, onChange }: Editor) => {
  return (
    <>
      <Container>
        <ReactQuill
          className={className}
          style={{ height: 200, width: 560, color: "#FFFFFF", fontSize: 20 }}
          theme="snow"
          value={value}
          onChange={onChange}
          placeholder="정답을 입력해주세요"
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-bottom: 60px;
`;

export default Editor;
