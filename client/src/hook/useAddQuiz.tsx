import { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useParams, useSearchParams } from "react-router-dom";
import { quizListState } from "../recoilState/quizList";
import { userState } from "../recoilState/user";
import MenuStore from "../stores/MenuStore";
import { createQuiz } from "../services/Quiz";
import { Quiz } from "../models/quiz";
import { User } from "../models/user";
import { useMe } from "./useMe";
import { getUserAddQuizs } from "../apis/Quiz";
import { queryClient } from "../queryClient";
import { quizKey } from "./useQuizs";
import { useMutation } from "react-query";
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
  const key = quizKey();

  return useMutation(async () => {
    const id = user?._id;
    const categoryIndex = MenuStore.findCategories(category);

    if (quizText.length === 0 || answerText.length === 0) {
      alert("텍스트를 입력해주세요");
      return false;
    }

    const img = MenuStore.findCategoriesUri(Number(categoryIndex));
    try {
      await createQuiz({
        quizText,
        answerText,
        category: categoryIndex,
        id,
        img,
      });

      queryClient.refetchQueries("users");
      queryClient.refetchQueries(key);

      return true;
    } catch (e) {
      alert("퀴즈 생성에 실패하셨습니다.");
    } finally {
      setQuizText("");
      setAnswerText("");
    }

    return false;
  }).mutateAsync;
};

interface UseQuizsOptions {
  page: number;
  onError?: (error: any) => void;
}

export const useGetAddQuizList = ({ page, onError }: UseQuizsOptions) => {
  const [quizList, setQuizList] = useRecoilState<Quiz[]>(quizListState);
  const [totalCount, setTotalCount] = useState(0);
  const user = useMe();

  const fetchQuizs = async () => {
    try {
      const data = await getUserAddQuizs(page);
      setQuizList(data.quizs.quizs);
      setTotalCount(data.quizs.totalCount);
      onError?.(null);
    } catch (e) {
      onError?.(e);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchQuizs();
  }, [user?._id]);

  return { quizList, totalCount };
};
