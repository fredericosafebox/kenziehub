import { StyledTitle } from "./styles";
import { ITitle } from "../../interfaces/ITitle";
import React from "react";

function Title({ title }: ITitle) {
  return <StyledTitle>{title}</StyledTitle>;
}

export { Title };
