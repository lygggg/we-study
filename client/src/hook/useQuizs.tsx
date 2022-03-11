import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { quizState } from "../recoilState/quiz";
import { Quiz } from "../models/quiz";
import { getQuiz } from "../services/Quiz";
import { useMe } from "./useMe";
import { likeQuizState } from "../recoilState/like";

interface UseQuizsOptions {
  onError: (error: any) => void;
}
export const useQuizs = ({ onError }: UseQuizsOptions) => {
  const value = useRecoilValue(quizState);
  const like = useRecoilValue(likeQuizState);
  const user = useMe();
  const { categoryId } = useParams();
  const [quizList, setQuizList] = useState<Quiz[] | undefined>();

  const fetchQuizs = async () => {
    try {
      const data = await getQuiz({
        category: categoryId,
      });
      setQuizList(data.quizs);
      onError(null);
    } catch (e) {
      onError(e);
    }
  };

  useEffect(() => {
    fetchQuizs();
  }, [categoryId, value, user?._id, like]);

  return quizList;
};
