import { StyledForm } from "../BaseForm/styles";
import { AiOutlineClose } from "react-icons/ai";
import { techSchema } from "../../validators/cadastrotech.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/kenziehub.api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { INewTech } from "../../interfaces/INewTech";
import React from "react";

function TechForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<INewTech>({ resolver: yupResolver(techSchema) });

  const { token, setUser, closeModal } = useContext(AuthContext);

  function techRegister(data: INewTech) {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia cadastrada com sucesso", {
          theme: "dark",
        });
        api
          .get("/profile", {
            headers: {
              Authorization: `token ${token}`,
            },
          })
          .then((res) => {
            setUser(res.data);
          });
        closeModal();
      })
      .catch(() => {
        toast.error("Ops, algo deu errado", {
          theme: "dark",
        });
      });
  }

  return (
    <StyledForm onSubmit={handleSubmit(techRegister)}>
      <div className="app__modal--form-header">
        <h3>Cadastrar tecnologia</h3>
        <button type="button" onClick={closeModal}>
          <AiOutlineClose size={18} />
        </button>
      </div>
      <div className="app__form--body" id="modal__form--body">
        <div className="app__form--input-box">
          <label htmlFor="title">Nome</label>
          <input
            type="text"
            id="title"
            autoComplete="off"
            {...register("title")}
          />
          {errors.title && <span>{errors.title.message}</span>}
          <label htmlFor="status">Selecionar status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && <span>{errors.status.message}</span>}
          <button type="submit" /* onClick={techRegister} */>
            Cadastrar Tecnologia
          </button>
        </div>
      </div>
    </StyledForm>
  );
}

export { TechForm };
