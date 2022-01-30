import Popup from "reactjs-popup";
import styled from "styled-components";

const SolveModal = ({ question }) => {
  return (
    <Popup
      modal={true}
      contentStyle={{
        width: "840px",
        height: "660px",
        backgroundColor: "#eeeeee",
      }}
      trigger={
        <Description>
          <Item>Q.{question.description}</Item>
          <Item>제출자:{question.user}</Item>
        </Description>
      }
    >
      {(close) => (
        <>
          <Container>
            <Title>
              <OnButton onClick={close}>X</OnButton>
              <Inner>Q.{question.description}</Inner>
            </Title>
            <PaddingContainer>
              <TableContainer>
                <table>
                  <tbody>
                    <Qtr>
                      <Qth>정답 입력</Qth>
                      <Qtd>
                        <Textarea
                          // value={questionText}
                          maxLength="200"
                          // onChange={(v) => setQuestionText(v.target.value)}
                        ></Textarea>
                      </Qtd>
                    </Qtr>
                    <Qtr>
                      <Qth>정답 확인 클릭</Qth>
                      <Qtd>생각나는대로 모두 적어주세요</Qtd>
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
                제출하기
              </OkButton>
            </ButtonContainer>
          </Container>
        </>
      )}
    </Popup>
  );
};

const Description = styled.div`
  font-size: 25px;
`;

const Item = styled.div`
  margin-top: 12px;
`;

const OkButton = styled.button`
  font-size: 17px;
  margin-top: 60px;
  height: 60px;
  width: 216px;
  background: #0c151c;
  color: #fff;
  border: 2px solid #0073e9;
  border-radius: 4px;
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
  height: 240px;
  width: 650px;
`;
const Container = styled.div`
  background-color: #eeeeee;
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
  font-size: 20px;
`;
export default SolveModal;
