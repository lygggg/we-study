import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: auto;
`;

const UlContainer = styled.div`
  z-index: 1;
  width: 80px;
  position: absolute;
  left: -50px;
  top: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  & li {
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    place-content: center;
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

const OptionImg = styled.img`
  height: 15px;
  width: 15px;
  position: relative;
`;

const QuizDropDown = ({ quizId }) => {
  const outSideRef = useRef();
  const [isActive, setIsActive] = useState<boolean>(false);

  const onClick = () => setIsActive(!isActive);

  const onClickRemove = () => {
    console.log(quizId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (outSideRef.current && !outSideRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [outSideRef]);

  return (
    <Container onClick={onClick} ref={outSideRef}>
      <OptionImg
        onClick={() => setIsActive(true)}
        src="../../../assets/imgs/zum.png"
      ></OptionImg>
      {isActive && (
        <UlContainer>
          <ul>
            <li onClick={onClickRemove}>삭제</li>
            <li>수정</li>
          </ul>
        </UlContainer>
      )}
    </Container>
  );
};

export default QuizDropDown;
