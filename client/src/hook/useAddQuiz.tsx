import { useMe } from "./useMe";
import { useSetRecoilState } from "recoil";
import { quizState } from "../recoilState/quiz";
import MenuStore from "../stores/MenuStore";
import { createQuiz } from "../services/Quiz";

interface useAddQuiz {
  categoryId: string | number;
  quizText: string;
  answerText: string;
  setQuizText: (x: string) => void;
  setAnswerText: (x: string) => void;
}

export const useAddQuiz = ({
  categoryId,
  quizText,
  answerText,
  setQuizText,
  setAnswerText,
}: useAddQuiz) => {
  const user = useMe();
  const setQuiz = useSetRecoilState<string>(quizState);

  const AddQuiz = async () => {
    const id = user?._id;
    const img = MenuStore.findCategoriesUri(Number(categoryId));
    try {
      await createQuiz({
        quizText,
        answerText,
        category: categoryId,
        id,
        img,
      });
      setQuiz(quizText);
    } catch (e) {
      alert("퀴즈 생성에 실패하셨습니다.");
    } finally {
      setQuizText("");
      setAnswerText("");
    }
  };

  return AddQuiz;
};
