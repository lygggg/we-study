import Popup from "reactjs-popup";
import styled from "styled-components";

const AddModal = () => {
  return (
    <Popup
      modal={true}
      contentStyle={{ width: "640px", height: "460px" }}
      trigger={<AddButton>질문 추가</AddButton>}
    >
      {(close) => (
        <>
          <Container>
            <Title>
              <OnButton onClick={close}>X</OnButton>
              <Inner>네트워크 질문 추가</Inner>
            </Title>
            <PaddingContainer>
              <TableContainer>
                <table>
                  <tbody>
                    <Qtr>
                      <Qth>문제</Qth>
                      <Qtd>
                        <Textarea
                          // value={questionText}
                          maxLength="200"
                          // onChange={(v) => setQuestionText(v.target.value)}
                        ></Textarea>
                      </Qtd>
                    </Qtr>
                    <Qtr>
                      <Qth>정답</Qth>
                      <Qtd>
                        <Textarea
                          // value={questionText}
                          maxLength="200"
                          // onChange={(v) => setQuestionText(v.target.value)}
                        ></Textarea>
                      </Qtd>
                    </Qtr>
                  </tbody>
                </table>
              </TableContainer>
            </PaddingContainer>
            <ButtonContainer>
              <OkButton
                onClick={() => {
                  close();
                }}
              >
                확인
              </OkButton>
            </ButtonContainer>
          </Container>
        </>
      )}
    </Popup>
  );
};

const OkButton = styled.button`
  font-size: 17px;
`;
const ButtonContainer = styled.div`
  text-align: center;
`;
const PaddingContainer = styled.div`
  padding: 14px;
`;

const TableContainer = styled.div`
  height: 380px;
  border-top: 2px solid;
  padding: 8px;
`;

const Textarea = styled.textarea`
  height: 140px;
  width: 460px;
`;
const Container = styled.div`
  background-color: #eeeeee;
`;

const AddButton = styled.button`
  color: #fff;
  background: #0c151c;
  alignself: center;
  height: 50px;
  align-self: center;
`;

const OnButton = styled.button`
  float: right;
`;

const Title = styled.div`
  height: 65px;
  background: #eee;
`;

const Inner = styled.div`
  padding: 14px;
  display: flex;
  font-size: 25px;
  height: 70px;
  align-items: center;
`;
const Qtd = styled.td`
  width: 500px;
  padding: 20px;
`;

const Qtr = styled.tr`
  border-bottom: 1px solid #ddd;
  height: 160px;
`;

const Qth = styled.th`
  border-right: 1px solid #ddd;
  padding: 10px;
`;
export default AddModal;
