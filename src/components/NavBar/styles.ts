import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12vh;
  min-height: 4rem;
  max-height: 6rem;
  transition: 1s;

  div {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1600px;
    justify-content: space-between;
    align-items: center;
    transition: 1s;

    a {
      background: rgb(var(--grey-3));
      color: rgb(var(--grey-0));
      font-size: 1rem;
      padding: 1rem 2rem;
      font-weight: 600;
      text-decoration: none;
      border-radius: 0.5rem;
      transition: 1s;
      cursor: pointer;

      &:hover {
        background: rgb(var(--grey-2));
      }
    }

    @media screen AND (max-width: 1600px) {
      padding: 0 2rem;
    }

    @media screen AND (max-width: 425px) {
      padding: 0 1rem;
    }
  }
`;
