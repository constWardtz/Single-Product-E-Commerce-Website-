import styled from "styled-components";

export const PrimaryButton = styled.div`
  padding: 10px;
  background-color: var(--primary-color);
  color: var(--light-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--hover-color);
    transition: all ease-in-out 0.5s;
  }
`;
