import Popup from "reactjs-popup";
import styled from "styled-components";
import { Quiz } from "../../models/quiz";
import { useCreateQuizCart, useRemoveCartQuiz } from "../../hook/useCartQuiz";
import { useSetRecoilState } from "recoil";
import { quizListState } from "../../recoilState/quizList";
interface LikeModalProps {
  open: boolean;
  onClose: any;
  quiz: Quiz;
}

const LikeModal = ({ open, quiz, onClose }: LikeModalProps) => {
  const addLikeQuiz = useCreateQuizCart(quiz._id);
  const removeLikeQuiz = useRemoveCartQuiz(quiz._id);

  const setSearch = useSetRecoilState(quizListState);

  const onClickCartQuiz = async () => {
    if (!!quiz.like) {
      removeLikeQuiz();
      //quiz.likeCount -= 1;
      //quiz.like = false;

      setSearch((prev) =>
        prev.map((x) => {
          if (x._id === quiz._id)
            return { ...x, likeCount: x.likeCount - 1, like: false };
          return x;
        }),
      );

      return;
    }
    addLikeQuiz();
    //quiz.likeCount += 1;
    //quiz.like = true;

    setSearch((prev) =>
      prev.map((x) => {
        if (x._id === quiz._id)
          return { ...x, likeCount: x.likeCount + 1, like: true };
        return x;
      }),
    );
  };

  return (
    <Popup
      modal={true}
      open={open}
      contentStyle={{
        width: "414px",
        height: "230px",
        backgroundColor: "#FFFFFF",
      }}
      onClose={onClose}
    >
      {(close: () => void) => (
        <>
          <Container>
            <TitleContainer>
              <H2>좋아요 {quiz.likeCount}</H2>
            </TitleContainer>

            <LikeContainer>
              <Explanation>좋아요를 누르시겠습니까?</Explanation>
              <LikeButton
                onClick={() => {
                  onClickCartQuiz();
                  close();
                }}
                style={
                  !!quiz.like
                    ? { backgroundColor: "#FFE08C" }
                    : { backgroundColor: "#FFFFFF" }
                }
              >
                <LikeImg src="../../../assets/imgs/like-icon.png"></LikeImg>
              </LikeButton>
            </LikeContainer>
          </Container>
        </>
      )}
    </Popup>
  );
};

const LikeButton = styled.button`
  height: 110px;
  width: 130px;
  display: flex;
  align-items: center;
  place-content: center;
  border-radius: 8px;
`;

const LikeImg = styled.img`
  width: 60%;
`;
const Explanation = styled.h3``;

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  padding: 18px 16px;
  align-items: center;
  height: 60px;
  place-content: center;
`;

const H2 = styled.h2`
  font-size: 21px;
  color: rgb(34, 34, 34);
  font-weight: 500;
`;

const LikeContainer = styled.div`
  color: rgb(34, 34, 34);
  display: flex;
  flex-direction: column;
  text-align-last: center;
  gap: 25px;
  align-items: center;
`;
export default LikeModal;
