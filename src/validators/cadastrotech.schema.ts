import * as yup from "yup";

export const techSchema = yup
  .object({
    title: yup.string().required("* este campo é obrigatório"),
    status: yup.string().required("* este campo é obrigatório"),
  })
  .required();
