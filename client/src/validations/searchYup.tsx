import * as yup from "yup";

export const searchValidation = yup.object({
  text: yup.string().required(),
});
