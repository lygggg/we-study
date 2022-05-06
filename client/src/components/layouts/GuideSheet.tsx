import styled from "styled-components";

const GuideSheet = () => {
  const guideObject = [
    {
      title: "친구들과 간편하게 면접 공부를 할 수 있도록 제공해요",
      uri: "https://cdn.pixabay.com/photo/2021/12/02/16/46/graduation-6840941_960_720.png",
      text: "면접 질문들을 찾아다닐 필요 없이 사이트에서 카테고리별로 공부하고 싶은 분야를 선택해서 공부해 보세요.",
      id: 1,
    },
    {
      title: "내가 생각하는 문제를 간단하게 추가하고 공유해 보세요.",
      uri: "https://cdn.pixabay.com/photo/2017/10/06/09/34/group-2822423_960_720.png",
      text: "면접 질문들을 추가하고 자신이 생각하는 답을 친구들과 공유하면 큰 학습효과를 기대할 수 있다고 생각해요.",
      id: 2,
    },
    {
      title: "맘에 드는 문제를 좋아요하고 소장해보세요.",
      uri: "https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_960_720.jpg",
      text: "소장하고 싶은 문제들을 좋아요 누르면 언제든지 좋아 요한 문제들을 한눈에 볼 수 있어요.",
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
  line-height: 32px;
  letter-spacing: -0.6px;
  transform: scaleX(0.95);
  transform-origin: left;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: 600;
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
  height: 80px;
`;

export default GuideSheet;
