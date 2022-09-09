import * as yup from "yup";

export const registerSchema = yup
  .object({
    name: yup.string().required("* este campo é obrigatório"),
    email: yup
      .string()
      .email("* formato de email inválido. ex - email@gmail.com")
      .required("* este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "* a senha deve ter no mínimo 8 caracteres")
      .max(16, "* a senha deve ter no máximo 16 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "* deve conter letra maiúscula, minúscula, número e caractere especial"
      )
      .required("* este campo é obrigatório"),
    confPassword: yup
      .string()
      .oneOf([yup.ref("password")], "* as senhas devem corresponder")
      .required("* este campo é obrigatório"),
    bio: yup.string().required("* este campo é obrigatório"),
    contact: yup.string().required("* este campo é obrigatório"),
    course_module: yup.string().required("* este campo é obrigatório"),
  })
  .required();
