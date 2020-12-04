import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 80vh;
    border-top: 1px var(--thin-color) solid;

    /* Layout */
    display: grid;
    place-items: center;
`
export const Content = styled.div`
    width: 75%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const TextContainer = styled.div`
    text-align: start;

    /* Layout */
    display: flex;
    flex-direction: column;
    justify-content: center;

    div{
        margin: .8rem;
        margin-left: unset;
    }

    div:nth-child(1){
        h1{
            font-size: calc(var(--primary-text) + 2rem);
            font-weight: var(--font-weight-500);
            color: var(--secondary-color);
        }
       div{
            width: 70%;
            height: 3px;
            background: var(--primary-color);
        }
    }

    div:nth-child(2){
        p{
            color: var(--secondary-color);
            font-size: calc(var(--primary-text) + .2rem);
        }
    }

    div:nth-child(3){
        i{
            padding: 1rem;
            padding-left: unset;
            font-size: calc(var(--primary-text) + .8rem);
            color: var(--primary-color);

            &:hover{
                cursor: pointer;
                transition: all ease-in-out .3s;
                color: var(--hover-color);
            }
        }
    }

`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 50%;
        width: 65%;
    }
`