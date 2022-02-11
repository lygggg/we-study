import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { questionState } from "../atom/question";
import { getQuestion } from "../services/Question";
import MenuStore from "../stores/MenuStore";
import QuestionLayout from "../components/layouts/QuestionLayout";
import Modal from "./modals/AddModal";

const QuestionList = () => {
  const value = useRecoilValue(questionState);
  const { categoryId } = useParams();
  const [questionList, setQuestionList] = useState([]);

  const fetchQuestions = async () => {
    const data = await getQuestion({
      category: categoryId,
    });
    setQuestionList(data.quizs);
  };

  useEffect(() => {
    fetchQuestions();
  }, [categoryId]);

  useEffect(() => {
    fetchQuestions();
  }, [value]);

  return (
    <>
      <Modal
        category={MenuStore.categories[categoryId]}
        categoryId={categoryId}
      />
      <QuestionLayout questionList={questionList} />
    </>
  );
};

export default QuestionList;
