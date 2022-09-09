import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(var(--grey-4), 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  #app__form--frame {
    width: 100%;
    border-radius: 0.5rem;
    max-width: 22rem;
    max-height: 100%;
    overflow: hidden;

    form {
      padding: 0;
    }
  }
`;
