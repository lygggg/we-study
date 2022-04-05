import { useParams, useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getQuizs, removeQuiz, updateQuiz } from "../services/Quiz";
import { queryClient } from "../queryClient";

export const quizKey = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  return ["quizs", searchParams.get("page"), categoryId];
};

interface UseQuizsOptions {
  page: number;
  onError: (error: any) => void;
}
export const useQuizs = ({ page }: UseQuizsOptions) => {
  const { categoryId } = useParams();
  const { data } = useQuery(quizKey(), {
    queryFn: () => getQuizs({ page: page, category: categoryId }),
    suspense: true,
  });

  return data.quizs;
};

export const useRemoveQuiz = (quizId) => {
  const mutation = useMutation(async (newTodo) => {
    await removeQuiz(quizId);

    //user.refetch();
    queryClient.refetchQueries("quizs");
    queryClient.refetchQueries("users");
  });
  return mutation;
};

export const useUpdateQuiz = (params) => {
  const mutation = useMutation(async () => {
    await updateQuiz(params);
    queryClient.refetchQueries("quizs");
  });
  return mutation;
};
