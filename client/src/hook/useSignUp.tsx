import { signupEmail } from "../firebase/Firebase";
import { signUpUser } from "../services/SignUp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface useSignUp {
  setLoading: any;
  setError: any;
}

interface sigUp {
  email: string;
  password: string;
  name: string;
}

export const useSignUp = () => {
  const navigateTo = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const signUp = async ({ email, password, name }: sigUp) => {
    setLoading(true);

    try {
      await signupEmail(email, password);

      await signUpUser({ name, email });
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
