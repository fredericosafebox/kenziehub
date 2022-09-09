import { StyledHeader } from "./styles";
import React from "react";
import { IHeader } from "../../interfaces/IHeader";

function Header({ name, course_module }: IHeader) {
  return (
    <StyledHeader>
      <div>
        <h2>{`Olá, ${name}`}</h2>
        <span>{course_module}</span>
      </div>
    </StyledHeader>
  );
}

export { Header };
