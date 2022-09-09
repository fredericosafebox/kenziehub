import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  min-height: 6rem;
  max-height: 8rem;
  transition: 1s;
  border-top: 1px solid rgb(var(--grey-3));
  border-bottom: 1px solid rgb(var(--grey-3));

  div {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1600px;
    justify-content: space-between;
    align-items: center;
    transition: 1s;

    h2 {
      color: rgb(var(--grey-0));
      font-weight: 700;
      font-size: 1.4rem;
      transition: 1s;
    }

    span {
      color: rgb(var(--grey-1));
      font-weight: 400;
      font-size: 1rem;
      transition: 1s;
    }

    @media screen AND (max-width: 1600px) {
      padding: 0 2rem;
    }
    @media screen AND (max-width: 425px) {
      padding: 0 1rem;
    }
  }
`;
