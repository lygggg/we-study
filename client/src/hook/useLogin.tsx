import { useNavigate } from "react-router-dom";
import { setLoginState } from "../firebase/Firebase.js";

interface useAddQuiz {
  setLoading: (x: boolean) => void;
  setError: (x: any) => void;
}

export const useLogin = ({ setLoading, setError }: useAddQuiz) => {
  const navigateTo = useNavigate();

  const tryLogin = async (loginMethod, args) => {
    try {
      await loginMethod(...args);
      setLoginState();
      navigateTo("/");
      setError(null);
      setLoading(false);

      localStorage.setItem("isLoggedIn", "true");
    } catch (e) {
      setLoading(false);
      setError(e);

      alert("로그인에 실패하였습니다.");
    }
  };

  return tryLogin;
};
