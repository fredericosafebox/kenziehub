import { StyledForm } from "../BaseForm/styles";
import { Title } from "../Title";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators/login.schema";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { api } from "../../services/kenziehub.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ILogin } from "../../interfaces/ILogin";
import React from "react";

function LoginForm() {
  const { token, tokenSetter, logout } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      api
        .get("/profile", {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then(() => {
          history.replace({ pathname: "/", state: { isActive: true } });
          toast.success("Bem-vindo(a) de volta =)", {
            theme: "dark",
          });
        })
        .catch(() => {
          logout();
        });
    }
  }, []);

  function login(data: ILogin) {
    api
      .post("/sessions", data)
      .then((res) => {
        toast.success("Login realizado com sucesso", {
          theme: "dark",
        });
        tokenSetter(res.data.token);
        history.push("/");
      })
      .catch((error) => {
        toast.error("Usuário e/ou senha inválido(s)", {
          theme: "dark",
        });
      });
  }

  function toRegister() {
    history.push("/register");
  }
  return (
    <motion.div
      className="framer--wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <StyledForm onSubmit={handleSubmit(login)}>
        <div className="app__form--header" id="login">
          <Title title="Kenzie Hub" />
        </div>
        <div className="app__form--body">
          <h3>Login</h3>
          <div className="app__form--input-box">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              autoComplete="off"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="password">Senha</label>
            <input
              autoComplete="off"
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button type="submit">Entrar</button>
          </div>
          <div className="app__form--extra-content">
            <h4>Ainda não possui uma conta?</h4>

            <button
              type="button"
              onClick={toRegister}
              className="app__button--disabled"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </StyledForm>
    </motion.div>
  );
}

export { LoginForm };
