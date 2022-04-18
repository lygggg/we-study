import { useSearchParams } from "react-router-dom";
import MenuStore from "../stores/MenuStore";
import { createQuiz } from "../services/Quiz";
import { useMe } from "./useMe";
import { getUserAddQuizs } from "../apis/Quiz";
import { queryClient } from "../queryClient";
import { quizKey } from "./useQuizs";
import { useMutation, useQuery } from "react-query";

export const addQuizKey = () => {
  const [searchParams] = useSearchParams();
  return ["quizs", "addQuiz", searchParams.get("page")];
};
interface useAddQuiz {
  category: string;
  quizText: string;
  answerText: string;
}

export const useAddQuiz = ({ category, quizText, answerText }: useAddQuiz) => {
  const user = useMe();
  const key = quizKey();
  return useMutation(async () => {
    const id = user?._id;
    const categoryIndex = MenuStore.findCategories(category);

    if (quizText.length === 0 || answerText.length === 0) {
      alert("텍스트를 입력해주세요");
      return false;
    }

    if (!category) {
      alert("카테고리를 선택해주세요");
      return false;
    }

    const img = MenuStore.findCategoriesUri(Number(categoryIndex));
    await createQuiz({
      quizText,
      answerText,
      category: categoryIndex,
      id,
      img,
    });
    queryClient.refetchQueries("users");
    queryClient.refetchQueries(key);
  }).mutateAsync;
};

interface UseQuizsOptions {
  page: number;
}

export const useGetAddQuizList = ({ page }: UseQuizsOptions) => {
  const { data } = useQuery(addQuizKey(), {
    queryFn: () => getUserAddQuizs(page),
    suspense: true,
  });

  return data;
};
