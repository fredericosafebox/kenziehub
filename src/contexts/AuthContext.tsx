import { useState, createContext } from "react";
import { api } from "../services/kenziehub.api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { IRegisterData } from "../interfaces/IRegister";
import { IChildren } from "../interfaces/IChildren";
import { IContext } from "../interfaces/IContext";
import React from "react";

const AuthContext = createContext({} as IContext);

function AuthProvider({ children }: IChildren) {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [isModal, setIsModal] = useState(false);
  const [isNewTech, setIsNewTech] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  function newUser(data: IRegisterData) {
    delete data.confPassword;
    api
      .post("/users", data)
      .then((res: object) => {
        toast.success("Cadastro realizado com sucesso", {
          theme: "dark",
        });
        history.push("/login");
      })
      .catch((error: object) => {
        toast.error("Ops, algo deu errado");
      });
  }

  function newTech() {
    setIsModal(true);
    setIsNewTech(true);
  }

  function tokenSetter(newToken: string) {
    setToken(newToken);
    window.localStorage.setItem("token", newToken);
    console.log(token);
  }
  function logout() {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
  }
  function closeModal() {
    setIsNewTech(false);
    setIsUpdate(false);
    setIsModal(false);
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        token,
        isModal,
        setIsModal,
        tokenSetter,
        newUser,
        isUpdate,
        setIsUpdate,
        isNewTech,
        setIsNewTech,
        closeModal,
        newTech,
        selectedTech,
        setSelectedTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
