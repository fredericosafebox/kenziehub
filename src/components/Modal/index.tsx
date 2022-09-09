import { ModalWrapper } from "./styles";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import React from "react";
import { IChildren } from "../../interfaces/IChildren";

function Modal({ children }: IChildren) {
  const { closeModal } = useContext(AuthContext);
  const modalEffects = {
    key: "modal",
    className: "framer-wrapper",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div {...modalEffects}>
      <ModalWrapper
        onClick={(e) => {
          e.target === e.currentTarget && closeModal();
        }}
      >
        <div id="app__form--frame">{children}</div>
      </ModalWrapper>
    </motion.div>
  );
}

export { Modal };
