import { FaRegTrashAlt } from "react-icons/fa";
import { StyledLi } from "./styles";
import { api } from "../../services/kenziehub.api";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import React from "react";
import { ITechs } from "../../interfaces/ITechs";

function TechCard({ title, status, id }: ITechs) {
  const { token, setUser, setIsModal, setIsUpdate, setSelectedTech } =
    useContext(AuthContext);
  function deleteTech() {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia excluida com sucesso", {
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
      })
      .catch(() => {
        toast.error("Ops, algo deu errado");
      });
  }
  function openUpdateForm(event: React.MouseEvent) {
    if (event.target === event.currentTarget) {
      setSelectedTech(event.currentTarget.id);
      setIsModal(true);
      setIsUpdate(true);
    }
  }
  return (
    <StyledLi onClick={openUpdateForm} id={id}>
      <h6>{title}</h6>
      <div className="app__techs--painel">
        <p>{status}</p>
        <button onClick={deleteTech}>
          <FaRegTrashAlt size={16} />
        </button>
      </div>
    </StyledLi>
  );
}

export { TechCard };
