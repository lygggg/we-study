import { useSetRecoilState } from "recoil";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getLikeQuiz } from "../services/LikeQuiz";
import { User } from "../models/user";
import { useMe } from "./useMe";
import { queryClient } from "../queryClient";
import { removeLikeQuiz } from "../services/LikeQuiz";
import { createLikeQuiz } from "../services/LikeQuiz";
import { userState } from "../recoilState/user";

export const likeQuizKey = () => {
  const [searchParams] = useSearchParams();
  return ["likeQuiz", searchParams.get("page")];
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

    //user.refetch();
    queryClient.refetchQueries("likeQuiz");
    queryClient.refetchQueries("users");
  });
  return mutation;
  // const user = useMe();
  // const setUser = useSetRecoilState<User>(userState);
  // const removeQuiz = async () => {
  //   await removeLikeQuiz(quizId);
  //   setUser({ ...user, likeQuizCount: user.likeQuizCount - 1 });
  // };

  // return removeQuiz;
};

export const useCreateLikeQuiz = (quizId) => {
  const mutation = useMutation(async (newTodo) => {
    const data = await createLikeQuiz({ quizId: quizId });

    //user.refetch();
    console.log(data);
    queryClient.refetchQueries("likeQuiz");
    queryClient.refetchQueries("users");
  });
  return mutation;
  // const user = useMe();
  // const setUser = useSetRecoilState<User>(userState);
  // const likeQuiz = async () => {
  //   try {
  //     await createLikeQuiz({ quizId: quizId });
  //     setUser({ ...user, likeQuizCount: user.likeQuizCount + 1 });
  //   } catch (e) {
  //     alert("이미 소장한 퀴즈입니다.");
  //   }
  // };

  // return likeQuiz;
};
