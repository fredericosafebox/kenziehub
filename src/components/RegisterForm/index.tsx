import { StyledForm } from "../BaseForm/styles";
import { Title } from "../Title";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators/register.schema";
import { AuthContext } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import { IRegisterData } from "../../interfaces/IRegister";
import React from "react";

function RegisterForm() {
  const { newUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <motion.div
      className="framer--wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <StyledForm onSubmit={handleSubmit(newUser)}>
        <div className="app__form--header">
          <Title title="Kenzie Hub" />
          <Link to="/login">Voltar</Link>
        </div>
        <div className="app__form--body">
          <h3>Crie sua conta</h3>
          <h4>Rápido e grátis, vamos nessa</h4>

          <div className="app__form--input-box">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              autoComplete="off"
              id="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name && <span>{errors.name.message}</span>}

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

            <label htmlFor="confPassword">Confirmar Senha</label>
            <input
              autoComplete="off"
              type="password"
              id="confPassword"
              placeholder="Digite novamente sua senha"
              {...register("confPassword")}
            />
            {errors.confPassword && <span>{errors.confPassword.message}</span>}

            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              autoComplete="off"
              id="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio && <span>{errors.bio.message}</span>}

            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              autoComplete="off"
              id="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact && <span>{errors.contact.message}</span>}

            <label htmlFor="course_module">Selecionar módulo</label>
            <select id="course_module" {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo (Backend Avançado)
              </option>
            </select>
            {errors.course_module && (
              <span>{errors.course_module.message}</span>
            )}

            <button className="app__button--negative" type="submit">
              Cadastrar
            </button>
          </div>
        </div>
      </StyledForm>
    </motion.div>
  );
}

export { RegisterForm };
