import { useMe } from "./useMe";
import { useSetRecoilState } from "recoil";
import { questionState } from "../atom/question";
import MenuStore from "../stores/MenuStore";
import { CreateQuestion } from "../services/Question";

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
  const setQuestion = useSetRecoilState<string>(questionState);

  const AddQuiz = async () => {
    const id = user._id;
    const img = MenuStore.findCategories(categoryId);
    await CreateQuestion({
      quizText,
      answerText,
      category: categoryId,
      id,
      img,
    });
    setQuestion(quizText);
    setQuizText("");
    setAnswerText("");
  };

  return AddQuiz;
};
