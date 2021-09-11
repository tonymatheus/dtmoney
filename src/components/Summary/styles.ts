import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.28rem;
    color: var(--text-title);
    transition: 0.40s;

    &:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 500;
  }

  & .highLight-color {
    background: var(--green);
    color: #fff;
  }
`;
