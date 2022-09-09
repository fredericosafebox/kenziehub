import { TechCard } from "../TechCard";
import { ListWrapper } from "./styles";
import { FaPlus } from "react-icons/fa";
import { Modal } from "../Modal";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { TechForm } from "../TechForm";
import { AuthContext } from "../../contexts/AuthContext";
import { TechUpdate } from "../TechUpdate";
import React from "react";

function Techs() {
  const { user, isModal, newTech, isNewTech, isUpdate } =
    useContext(AuthContext);

  return (
    <ListWrapper className="app__techs">
      <aside>
        <h5>Tecnologias</h5>
        <button onClick={newTech}>
          <FaPlus size={18} />
        </button>
      </aside>
      <ul>
        {user &&
          user.techs?.map((tech, index) => {
            return (
              <TechCard
                title={tech.title}
                status={tech.status}
                key={tech.id}
                id={tech.id}
              />
            );
          })}
      </ul>
      <AnimatePresence>
        {isModal && isNewTech && (
          <Modal>
            <TechForm />
          </Modal>
        )}
        {isModal && isUpdate && (
          <Modal>
            <TechUpdate />
          </Modal>
        )}
      </AnimatePresence>
    </ListWrapper>
  );
}

export { Techs };
