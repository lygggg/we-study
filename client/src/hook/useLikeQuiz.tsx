import { useEffect, useState } from "react";
import { getLikeQuiz } from "../apis/LikeQuiz";
import { Quiz } from "../models/quiz";
import { useMe } from "./useMe";
import { removeLikeQuiz } from "../services/LikeQuiz";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { likeQuizState } from "../recoilState/like";
import { createLikeQuiz } from "../services/LikeQuiz";

interface UseQuizsOptions {
  onError?: (error: any) => void;
}

export const useLikeQuizList = ({ onError }: UseQuizsOptions = {}) => {
  const [quizList, setQuizList] = useState<Quiz[] | undefined>();
  const likeQuiz = useRecoilValue(likeQuizState);
  const user = useMe();

  const fetchQuizs = async () => {
    try {
      const data = await getLikeQuiz();
      setQuizList(data.likeQuiz);
      onError?.(null);
    } catch (e) {
      onError?.(e);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchQuizs();
  }, [user?._id, likeQuiz]);

  return quizList;
};

export const useRemoveLikeQuiz = (quizId: string) => {
  const setLikeQuiz = useSetRecoilState<string>(likeQuizState);

  const removeQuiz = async () => {
    await removeLikeQuiz(quizId);
    setLikeQuiz(quizId);
  };

  return removeQuiz;
};

export const useCreateLikeQuiz = (quizId) => {
  const setLikeQuiz = useSetRecoilState<string>(likeQuizState);

  const likeQuiz = async () => {
    try {
      await createLikeQuiz({ quizId: quizId });
      setLikeQuiz(quizId);
    } catch (e) {
      alert("이미 소장한 퀴즈입니다.");
    }
  };

  return likeQuiz;
};
