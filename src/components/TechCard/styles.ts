import styled from "styled-components";

export const StyledLi = styled.li`
  background: rgb(var(--grey-4));
  min-height: 2.8rem;
  transition: 1s;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 0.2rem;
  justify-content: space-between;
  cursor: pointer;

  h6 {
    font-size: 0.9rem;
    color: rgb(var(--pure-white));
    font-weight: 600;
    transition: 1s;
  }

  .app__techs--painel {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    p {
      font-weight: 400;
      color: rgb(var(--grey-0));
      font-size: 0.75rem;
    }

    button {
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: rgb(var(--pure-white));
      border-radius: 0.5rem;
      transition: 1s;

      cursor: pointer;
    }
  }

  &:hover {
    background: rgb(var(--grey-2));
  }
`;
