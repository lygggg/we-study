import { useSetRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { quizListState } from "../recoilState/quizList";
import MenuStore from "../stores/MenuStore";
import { createQuiz } from "../services/Quiz";
import { Quiz } from "../models/quiz";
import { useMe } from "./useMe";
interface useAddQuiz {
  category: string;
  quizText: string;
  answerText: string;
  setQuizText: (x: string) => void;
  setAnswerText: (x: string) => void;
}

export const useAddQuiz = ({
  category,
  quizText,
  answerText,
  setQuizText,
  setAnswerText,
}: useAddQuiz) => {
  const user = useMe();
  const { categoryId } = useParams();
  const setQuizList = useSetRecoilState<Quiz[]>(quizListState);

  const AddQuiz = async () => {
    const id = user?._id;
    const categoryIndex = MenuStore.findCategories(category);
    if (categoryIndex === undefined) {
      alert("메뉴를 선택해주세요.");
      return false;
    }

    if (quizText.length === 0 || answerText.length === 0) {
      alert("텍스트를 입력해주세요");
      return false;
    }

    const img = MenuStore.findCategoriesUri(Number(categoryIndex));
    try {
      const { quizs } = await createQuiz({
        quizText,
        answerText,
        category: categoryIndex,
        id,
        img,
      });

      if (categoryIndex === +categoryId) {
        setQuizList((prev) => [...prev, quizs]);
      }

      return true;
    } catch (e) {
      alert("퀴즈 생성에 실패하셨습니다.");
    } finally {
      setQuizText("");
      setAnswerText("");
    }

    return false;
  };

  return AddQuiz;
};
