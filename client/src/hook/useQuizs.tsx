import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Quiz } from "../models/quiz";
import { getQuiz, removeQuiz, updateQuiz } from "../services/Quiz";
import { useMe } from "./useMe";
import { likeQuizState } from "../recoilState/like";
import { quizListState } from "../recoilState/quizList";

interface UseQuizsOptions {
  onError: (error: any) => void;
}
export const useQuizs = ({ onError }: UseQuizsOptions) => {
  const like = useRecoilValue(likeQuizState);
  const user = useMe();
  const { categoryId } = useParams();
  const [quizList, setQuizList] = useRecoilState<Quiz[]>(quizListState);

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
  }, [categoryId, user?._id, like]);

  return quizList;
};

export const useRemoveQuiz = (quizId) => {
  const setQuizList = useSetRecoilState<Quiz[]>(quizListState);

  const deleteQuiz = async () => {
    try {
      await removeQuiz(quizId);
      setQuizList((prev) => [...prev].filter((e) => e._id !== quizId));
    } catch (e) {
      alert("퀴즈 삭제에 실패하셨습니다.");
    }
  };
  return deleteQuiz;
};

export const useUpdateQuiz = (params) => {
  const setQuizList = useSetRecoilState<Quiz[]>(quizListState);
  const { quizId, quizText, answerText } = params;
  const modifyQuiz = async () => {
    try {
      const data = await updateQuiz(params);

      if (data.state === 200) {
        setQuizList((prev) =>
          [...prev].map((e) => {
            if (e._id === quizId) {
              return { ...e, answerText: answerText, quizText: quizText };
            }
            return e;
          }),
        );
      }
    } catch (e) {
      alert("퀴즈 수정에 실패하셨습니다.");
    }
  };
  return modifyQuiz;
};
