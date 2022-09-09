import * as yup from "yup";

export const updateTechSchema = yup
  .object({
    status: yup.string().required("* este campo é obrigatório"),
  })
  .required();
