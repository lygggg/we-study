import React from "react";
import styled from "styled-components";

const GuideSheet = () => {
  const guideObject = [
    {
      title: "친구들과 간편하게 면접공부",
      uri: "https://cdn.pixabay.com/photo/2021/12/02/16/46/graduation-6840941_960_720.png",
      text: "응애응애",
      id: 1,
    },
    {
      title: "친구들과 간편하게 면접공부",
      uri: "https://cdn.pixabay.com/photo/2021/12/02/16/46/graduation-6840941_960_720.png",
      text: "응애응애",
      id: 2,
    },
    {
      title: "친구들과 간편하게 면접공부",
      uri: "https://cdn.pixabay.com/photo/2021/12/02/16/46/graduation-6840941_960_720.png",
      text: "응애응애  응애응애  응애응애  응애응애  응애응애",
      id: 3,
    },
  ];
  return (
    <>
      <Ol>
        {guideObject.map((guide) => (
          <Li key={guide.id}>
            <FlexContainer>
              <Title>{guide.title}</Title>
              <Img src={guide.uri} />
            </FlexContainer>
            <Text>{guide.text}</Text>
          </Li>
        ))}
      </Ol>
    </>
  );
};

const Title = styled.div`
  font-size: 27px;
  font-weight: 700;
  color: #1c1c1c;
  line-height: 32px;
  letter-spacing: -0.6px;
  transform: scaleX(0.95);
  transform-origin: left;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #1c1c1c;
  line-height: 32px;
  letter-spacing: -1.5px;
  transform: scaleX(0.95);
  transform-origin: left;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Li = styled.li`
  width: 396px;
  height: 352px;
  margin: 14px;
  padding: 65px 30px 0 35px;
  border-radius: 10px;
  box-shadow: 15px 15px 15px rgb(0 0 0 / 15%);
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #eaeaea;
`;

const Ol = styled.ol`
  margin-top: 200px;
  margin-bottom: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0;
`;

const Img = styled.img`
  width: 100px;
`;

export default GuideSheet;
