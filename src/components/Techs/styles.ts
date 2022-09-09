import styled from "styled-components";

export const ListWrapper = styled.div`
  aside {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h5 {
      color: rgb(var(--grey-0));
      font-size: 1rem;
      font-weight: 600;
    }

    button {
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(var(--grey-3));
      color: rgb(var(--pure-white));
      border-radius: 0.5rem;
      transition: 1s;

      cursor: pointer;

      &:hover {
        background: rgb(var(--grey-2));
      }
    }
  }
  ul {
    width: 100%;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background: rgb(var(--grey-3));
    border-radius: 0.2rem;
    gap: 1rem;
    transition: 1s;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      width: 0.3rem;
      border-radius: 0.5rem;
    }
    &::-webkit-scrollbar-track {
      background: none;
      border-radius: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(var(--grey-4), 1);
      border-radius: 0.5rem;
    }
  }
`;
