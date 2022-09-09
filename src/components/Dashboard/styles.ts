import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 75vh;
  transition: 1s;
  overflow: hidden;

  .app__techs {
    width: 100%;
    max-width: 1600px;
    max-height: 100%;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: 1s;
    overflow-y: hidden;
    padding: 2rem 0;

    @media screen AND (max-width: 1600px) {
      padding: 2rem;
    }

    @media screen AND (max-width: 425px) {
      padding: 1rem;
    }
  }
`;
