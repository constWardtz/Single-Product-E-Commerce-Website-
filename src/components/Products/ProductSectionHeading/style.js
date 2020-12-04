import styled from 'styled-components'

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    padding: 10px;
    width: 74%;

    div{
        display: grid;

        h1{
            color: var(--secondary-color);
        }
    }
    
    div:nth-child(1){
          h1{
            padding: 5px;
            padding-left: unset;
        }

        span{
            width: 70%;
            height: 3px;
            background: var(--primary-color);
        }
    }
    
    div:nth-child(2){
        align-items: center;
    }
`

export const ButtonContainer = styled.div`
    display: ${({showBtn}) => showBtn ? 'block!important' : 'none!important'};
`