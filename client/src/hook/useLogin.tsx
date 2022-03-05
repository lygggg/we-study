import { useNavigate } from "react-router-dom";
import { setLoginState } from "../firebase/Firebase";

interface useAddQuiz {
  setLoading: (x: boolean) => void;
  setError: (x: any) => void;
}

export const useLogin = ({ setLoading, setError }: useAddQuiz) => {
  const navigateTo = useNavigate();

  const tryLogin = async (
    loginMethod: (email: string, password: string) => void,
    args: [string, string],
  ) => {
    try {
      await loginMethod(...args);
      setLoginState();
      setError(null);
      setLoading(false);
      navigateTo("/");
    } catch (e) {
      setLoading(false);
      setError(e);

      alert("로그인에 실패하였습니다.");
    }
  };

  return tryLogin;
};
