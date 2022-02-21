import { signupEmail } from "../firebase/Firebase.js";
import { signUpUser } from "../services/SignUp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { getUser } from "../apis/Login.jsx";
import { userState } from "../atom/user.jsx";
import { useRefreshMe } from "./useMe";

interface useSignUp {
  setLoading: any;
  setError: any;
}

interface sigUp {
  email: String;
  password: String | Number;
  name: String;
}

export const useSignUp = () => {
  const navigateTo = useNavigate();
  const refreshMe = useRefreshMe();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const signUp = async ({ email, password, name }: sigUp) => {
    setLoading(true);

    try {
      await signupEmail(email, password);

      await signUpUser({ name, email });
      await refreshMe();
      navigateTo("/signup/success");
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    signUp,
    loading,
    error,
  };
};
