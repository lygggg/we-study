import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { searchState } from "../atom/search";
import { getQuestion } from "../services/Question";
import QuestionLayout from "./layouts/QuestionLayout";

const SearcResult = () => {
  const questionList = useRecoilValue(searchState);
  console.log(questionList, "fsdf");

  return (
    <>
      <QuestionLayout questionList={questionList} />
    </>
  );
};

export default SearcResult;
