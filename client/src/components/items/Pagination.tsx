import styled from "styled-components";

const PageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 40px;
  height: 34px;
  line-height: 34px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #6c6c6c;
  color: #6c6c6c;
  background: #fff;
  display: inline-block;
  padding: 0 5px;
  text-align: center;
  margin-left: 1;
  margin: 5px;
`;

function Pagination({ total, pageSize, onPageChange }) {
  const pagesCount = Math.ceil(total / pageSize);
  const pages = [];

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i);
  }

  return (
    <PageDiv>
      <Button>이전</Button>
      {!pagesCount && <Button>{1}</Button>}
      {pages.map((e) => (
        <Button onClick={() => onPageChange(e)} key={e}>
          {e + 1}
        </Button>
      ))}
      <Button>다음</Button>
    </PageDiv>
  );
}

export default Pagination;
