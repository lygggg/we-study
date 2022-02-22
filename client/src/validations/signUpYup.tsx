import * as yup from "yup";

export const signUpValidation = yup.object({
  email: yup
    .string()
    .email("이메일을 입력해주세요")
    .required("이메일을 입력해주세요")
    .max(20, "이메일은 최대 12자리 입니다.")
    .min(5, "이메일은 최소 5자리 입니다."),
  name: yup
    .string()
    .required("이름을 입력해주세요")
    .max(15, "닉네임은 최대 15자리 입니다.")
    .min(2, "닉네임은 최소 2자리 입니다."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .min(6, "비밀번호는 최소 6자리 입니다."),
  checkPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인을 입력해주세요"),
});
