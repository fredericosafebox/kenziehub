import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 25rem;
  max-height: 100%;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  overflow-y: auto;
  scrollbar-gutter: stable;
  transition: 1s;

  .app__techupdate--painel {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;

    .app__button--disabled {
      width: fit-content;
      padding: 1rem 2rem;
    }
  }

  label {
    font-size: 0.75rem;
    color: rgb(var(--grey-0));
    font-weight: 400;
  }

  h4 {
    color: rgb(var(--grey-1));
    font-weight: 400;
    font-size: 0.75rem;
  }

  button {
    width: 100%;
    padding: 1rem 0;
    color: rgb(var(--pure-white));
    font-weight: 500;
    font-size: 1rem;
    border-radius: 0.5rem;
    background: rgb(var(--color-primary));
    transition: 1s;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
      background: rgb(var(--color-primary-50));
    }
  }

  span {
    color: rgb(var(--negative));
    font-size: 0.6rem;
  }

  .app__button--disabled {
    background: rgb(var(--grey-1));
    color: rgb(var(--grey-0));

    &:hover {
      background: rgb(var(--grey-2));
      color: rgb(var(--pure-white));
    }
  }

  .app__button--negative {
    background: rgb(var(--color-primary-disable));

    &:hover {
      background: rgb(var(--color-primary-50));
    }
  }

  input {
    background: rgb(var(--grey-2));
    color: rgb(var(--grey-0));
    border: 0;
    transition: 1s;
    font-size: 1rem;
    padding: 1rem;
    width: 100%;
    border-radius: 0.5rem;

    &:focus {
      box-shadow: 0 0 2px 1px rgb(var(--grey-0));
    }

    &::placeholder {
      color: rgb(var(--grey-1));
      font-weight: 400;
      font-size: 1rem;
    }
  }

  select {
    background: rgb(var(--grey-2));
    color: rgb(var(--grey-0));
    border: 0;
    transition: 1s;
    font-size: 1rem;
    padding: 1rem;
    width: 100%;
    border-radius: 0.5rem;

    &:focus {
      box-shadow: 0 0 2px 1px rgb(var(--grey-0));
    }

    &::placeholder {
      color: rgb(var(--grey-1));
      font-weight: 400;
      font-size: 1rem;
    }
  }

  .app__form--header {
    display: flex;
    background: rgb(var(--grey-4));
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5rem 0;

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
  }

  .app__modal--form-header {
    height: 3rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(var(--grey-2));
    color: rgb(var(--grey-0));
    font-weight: 700;
    font-size: 0.8rem;
    padding: 0 0 0 1rem;
    transition: 1s;

    button {
      width: 2rem;
      height: 2rem;
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
  }

  #login {
    justify-content: center;
  }

  #modal__form--body {
    border-radius: 0;
  }

  .app__form--body {
    width: 100%;
    background: rgb(var(--grey-3));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.3rem 1rem;
    border-radius: 0.5rem;
    gap: 2rem;

    h3 {
      color: rgb(var(--grey-0));
      font-size: 1.2rem;
      font-weight: 700;
    }

    .app__form--input-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      gap: 0.8rem;
    }

    .app__form--extra-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &::-webkit-scrollbar {
    width: 0.1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: none;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`;
