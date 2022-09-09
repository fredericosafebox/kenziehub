import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { Dashboard } from "../../components/Dashboard";
import { useHistory } from "react-router-dom";
import { Wrapper } from "./styles";
import { api } from "../../services/kenziehub.api";
import { useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthContext";
import React from "react";

function Home() {
  const history = useHistory();
  const { user, setUser, logout, token } = useContext(AuthContext);
  useEffect(() => {
    if (token !== null) {
      api
        .get("/profile", {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
          window.localStorage.setItem("id", res.data.id);
        })
        .catch(() => {
          toast.error("Sessão expirada. Realize o login novamente.", {
            theme: "dark",
          });
          logout();
          history.replace({ pathname: "/login", state: { isActive: true } });
        });
    } else {
      history.replace({ pathname: "/login", state: { isActive: true } });
    }
  }, []);

  return (
    <motion.div
      className="framer--wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {user && (
        <Wrapper>
          <NavBar logout={logout} />
          <Header name={user.name} course_module={user.course_module} />
          <Dashboard />
        </Wrapper>
      )}
    </motion.div>
  );
}

export { Home };
