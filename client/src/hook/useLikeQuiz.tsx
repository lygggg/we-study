import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { getLikeQuiz } from "../apis/LikeQuiz";
import { Quiz } from "../models/quiz";
import { User } from "../models/user";
import { useMe } from "./useMe";
import { removeLikeQuiz } from "../services/LikeQuiz";
import { useRecoilState } from "recoil";
import { createLikeQuiz } from "../services/LikeQuiz";
import { quizListState } from "../recoilState/quizList";
import { userState } from "../recoilState/user";
interface UseQuizsOptions {
  page: number;
  onError?: (error: any) => void;
}

export const useLikeQuizList = ({ page, onError }: UseQuizsOptions) => {
  const [quizList, setQuizList] = useRecoilState<Quiz[]>(quizListState);
  const [totalCount, setTotalCount] = useState(0);
  const user = useMe();

  const fetchQuizs = async () => {
    try {
      const data = await getLikeQuiz(page);
      setQuizList(data.quizs);
      setTotalCount(data.totalCount);
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

export const useRemoveLikeQuiz = (quizId: string) => {
  const user = useMe();
  const setUser = useSetRecoilState<User>(userState);
  const removeQuiz = async () => {
    await removeLikeQuiz(quizId);
    setUser({ ...user, likeQuizCount: user.likeQuizCount - 1 });
  };

  return removeQuiz;
};

export const useCreateLikeQuiz = (quizId) => {
  const user = useMe();
  const setUser = useSetRecoilState<User>(userState);
  const likeQuiz = async () => {
    try {
      await createLikeQuiz({ quizId: quizId });
      setUser({ ...user, likeQuizCount: user.likeQuizCount + 1 });
    } catch (e) {
      alert("이미 소장한 퀴즈입니다.");
    }
  };

  return likeQuiz;
};
