import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("* formato de email inválido")
      .required("* este campo é obrigatório"),
    password: yup.string().required("* este campo é obrigatório"),
  })
  .required();
