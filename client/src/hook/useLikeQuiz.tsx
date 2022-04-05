import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getLikeQuiz } from "../services/LikeQuiz";
import { queryClient } from "../queryClient";
import { removeLikeQuiz } from "../services/LikeQuiz";
import { createLikeQuiz } from "../services/LikeQuiz";

export const likeQuizKey = () => {
  const [searchParams] = useSearchParams();
  return ["quizs", "likeQuiz", searchParams.get("page")];
};
interface UseQuizsOptions {
  page: number;
  onError: (error: any) => void;
}

export const useLikeQuizList = ({ page }: UseQuizsOptions) => {
  const { data } = useQuery(likeQuizKey(), {
    queryFn: () => getLikeQuiz(page),
    suspense: true,
  });

  return data.quizs;
};

export const useRemoveLikeQuiz = (quizId: string) => {
  const mutation = useMutation(async (newTodo) => {
    await removeLikeQuiz(quizId);

    queryClient.refetchQueries(["quizs"]);
    queryClient.refetchQueries("users");
  });
  return mutation;
};

export const useCreateLikeQuiz = (quizId) => {
  const mutation = useMutation(async (newTodo) => {
    await createLikeQuiz({ quizId: quizId });

    //user.refetch();
    queryClient.refetchQueries(["quizs"]);
    queryClient.refetchQueries("users");
  });
  return mutation;
};
