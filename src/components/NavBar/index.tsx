import { Title } from "../Title";
import { StyledNav } from "./styles";
import { Link } from "react-router-dom";
import React from "react";
import { INavBar } from "../../interfaces/INavBar";

function NavBar({ logout }: INavBar) {
  return (
    <StyledNav>
      <div>
        <Title title="Kenzie Hub" />
        <Link to="/login" onClick={logout}>
          Sair
        </Link>
      </div>
    </StyledNav>
  );
}

export { NavBar };
