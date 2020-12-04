import styled from 'styled-components'

/* HEADER SERVICE */
export const HeaderServiceContainer = styled.div`
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    height: auto;
    border: 1px var(--thin-color) solid;
    border-radius: 5px;
    padding: 1.5rem; 
    width: 20%;
    margin: 1rem;
    
    display: flex;

    i {
      font-size: calc(var(--primary-text) + 2rem);
      padding: 1rem;
      padding-left: unset;
      color: var(--secondary-color);
    }
    h1 {
      font-size: calc(var(--secondary-text) + 0.2rem);
      font-weight: calc(var(--font-weight-500) + 200);
    }

    p {
      font-size: var(--small-text);
      color: var(--secondary-color);
    }
  }
`;

export const TextContainer = styled.ul`
  display: grid;
`