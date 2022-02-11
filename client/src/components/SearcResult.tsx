import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestion } from "../services/Question";
import QuestionLayout from "./layouts/QuestionLayout";

const SearcResult = () => {
  console.log(questionList, "fsdf");

  return (
    <>
      <QuestionLayout questionList={questionList} />
    </>
  );
};

export default SearcResult;
