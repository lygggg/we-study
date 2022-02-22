import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { questionState } from "../recoilState/question";
import { getQuestion } from "../services/Question";

interface UseQuestionsOptions {
  onError: (error: any) => void;
}
export const useQuestions = ({ onError }: UseQuestionsOptions) => {
  const value = useRecoilValue(questionState);
  const { categoryId } = useParams();
  const [questionList, setQuestionList] = useState([]);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestion({
        category: categoryId,
      });
      setQuestionList(data.quizs);
      onError(null);
    } catch (e) {
      onError(e);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [categoryId]);

  useEffect(() => {
    fetchQuestions();
  }, [value]);

  return questionList;
};
