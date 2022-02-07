import * as yup from "yup";

export const loginValidation = yup.object({
  email: yup
    .string()
    .email("이메일을 입력해주세요")
    .required("이메일을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요"),
});
