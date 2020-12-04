import styled from 'styled-components'

export const FooterContainer = styled.div`
    height: 70vh;
    background: var(--primary-color);
`

export const LineOne = styled.div`
    padding: 6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ul{
        padding: 2rem;
    }
`

export const LineTwo = styled.div`
    color: var(--light-color);
    border-top: 1px var(--thin-color) solid;
    padding: 3rem;

    /* Layout */
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        padding: .2rem;
    }
`