import { StyledForm } from "../BaseForm/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateTechSchema } from "../../validators/techupdate.schema";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/kenziehub.api";
import { ITechs } from "../../interfaces/ITechs";
import { IUpdate } from "../../interfaces/IUpdate";
import { toast } from "react-toastify";
import React from "react";

function TechUpdate() {
  const { closeModal, setSelectedTech, selectedTech, user, token, setUser } =
    useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUpdate>({ resolver: yupResolver(updateTechSchema) });

  const [theTech, setTheTech] = useState<ITechs>();
  useEffect(() => {
    setTheTech(user?.techs.find((tech: ITechs) => tech?.id === selectedTech));
    return () => {
      setSelectedTech(null);
    };
  }, []);

  function deleteTech() {
    api
      .delete(`/users/techs/${selectedTech}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia excluida com sucesso", {
          theme: "dark",
        });
        closeModal();
        api
          .get("/profile", {
            headers: {
              Authorization: `token ${token}`,
            },
          })
          .then((res) => {
            setUser(res.data);
          });
      })
      .catch((error) => {
        toast.error("Ops, algo deu errado");
      });
  }

  function updateTech(data: { status: string }) {
    api
      .put(`/users/techs/${selectedTech}`, data, {
        headers: { Authorization: `token ${token}` },
      })
      .then((res) => {
        toast.success("Tecnologia atualizada com sucesso", {
          theme: "dark",
        });
        closeModal();
        api
          .get("/profile", {
            headers: {
              Authorization: `token ${token}`,
            },
          })
          .then((res) => {
            setUser(res.data);
          });
      })
      .catch((error) => {
        toast.error("Ops, algo deu errado");
      });
  }

  return (
    <StyledForm onSubmit={handleSubmit(updateTech)}>
      <div className="app__modal--form-header">
        <h3>Tecnologia detalhes</h3>
        <button type="button" onClick={closeModal}>
          <AiOutlineClose size={18} />
        </button>
      </div>
      <div className="app__form--body" id="modal__form--body">
        <div className="app__form--input-box">
          <label htmlFor="title">Nome do projeto</label>
          <input
            type="text"
            id="title"
            defaultValue={theTech?.title}
            autoComplete="off"
            disabled
          />
          <label htmlFor="status">Status</label>
          <select
            id="status"
            {...register("status")}
            defaultValue={theTech?.status}
          >
            {["Iniciante", "Intermediário", "Avançado"].map((status, index) => {
              if (status === theTech?.status) {
                return (
                  <option selected value={status} key={index}>
                    {status}
                  </option>
                );
              }
              return (
                <option value={status} key={index}>
                  {status}
                </option>
              );
            })}
          </select>
          {errors.status && <span>{errors.status.message}</span>}
          <div className="app__techupdate--painel">
            <button className="app__button--negative" type="submit">
              Salvar alterações
            </button>
            <button
              type="button"
              onClick={deleteTech}
              className="app__button--disabled"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </StyledForm>
  );
}

export { TechUpdate };
