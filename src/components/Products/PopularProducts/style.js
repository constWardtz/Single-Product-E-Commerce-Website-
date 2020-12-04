import styled from 'styled-components'

export const ProductContainer = styled.div`
    border: 1px var(--thin-color) solid;
    padding: 10px;
    width: 280px;
    height: 400px;
    margin: .5rem;

    /* Layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const ImageContainer = styled.div`
    width: auto;
    img{
        max-width: 100%;
    }
`
export const FirstLine = styled.div`
    padding: 10px;
    text-align: start;
    h1{
        font-weight: var(--font-weight-300);
        font-size: calc(var(--primary-text) + .7rem);
    }

    p{
        font-size: calc(var(--primary-text) - .2rem);
        color: var(--dark-color);
        padding-top: .5rem;
    }
`
export const SecondLine = styled.div`
    display: flex;
    justify-content: space-between;

    ul{
        padding: 10px;
    }

    ul:nth-child(1){
        img{
            width: 5rem;
        }

        p{
            font-size: calc(var(--primary-text) + .5rem)
        }
    }

    ul:nth-child(2){
        img{
            width: 5rem;
        }
    }

`