import styled from 'styled-components'
 
/* Assets */ 
import logo from '../../../assets/images/logos/logo_navbar.png'

export const Header = styled.div`
    display: grid;
    grid-auto-rows: auto;
`
export const HeaderTop = styled.div`
    height: 45px;
    background: var(--primary-color);
    color: var(--thin-color);
    font-size: var(--secondary-text);

    /* Layout */
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-around;
    align-items: center;
    
    
    @media screen and (max-width: 990px){
        display: flex;
        justify-content: space-between;

        ul{
            margin: unset!important;
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width: 444px){
        height: 75px;
       
        ul{
            position: relative;
            top: -8px;
                li{
                    margin: 0 0 -1rem 0!important;
                }
        }
    }

    ul{
        display: flex;
        margin: 0 -3rem 0 -3rem;

        li{
            padding: 10px;
            display: flex;
            align-items: center;
            color: var(--thin-color);
        }
    }
`

export const Menu = styled.ul`
    @media screen and (max-width: 990px){
        display: none!important;
    }
`

export const HeaderMiddle = styled.div`
    height: 80px;
    border-bottom: 1px var(--thin-color) solid;
    /* Layout */
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-content: space-around;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 730px){
        height: 170px;
        all: unset;
        padding: 12px;
        border: 1px var(--thin-color) solid;

        li{
            margin: unset!important;
                input{
                    width: 100%;
                }
        }

        ul:nth-child(2){
            margin-top: 1rem;
        }

        ul:nth-child(3){
            margin-top: 1.5rem;
        }
    }
`

export const HeaderBottom = styled.div`
    height: 80px;
    border-bottom: 1px var(--thin-color) solid;
    /* Layout */
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: center;
`

/* Fragments */ 

export const ButtonContainer = styled.div`
    display: flex;
    @media screen and (max-width: 730px){
        border: 1px var(--thin-color) solid;
        flex-direction: column;
        background: var(--light-color);
        padding: 10px;
        display: ${({isOpen}) => (isOpen ? 'grid' : 'none')};
        
        ul {
            flex-direction: column;
            align-items: start;
            margin: unset;
        }
    }
`

export const MenuContainer = styled.div`
    @media screen and (max-width: 730px){
        position: fixed;
        padding: 15px;
    }

`

export const OnMobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 730px){
        display: block;
        color: var(--light-color);
    }
`
export const Input = styled.li`
    display: flex;
    align-items: center;
    margin: 0 -12rem 0 -12rem;

    input{
        padding: 13px;
        border: 1px var(--thin-color) solid;
        width: 28rem;
        color: var(--secondary-color);
        font-size: var(--primary-text);
        outline: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        @media screen and (max-width: 990px){
            width: 15rem;
        }
    }

    @media screen and (max-width: 1359px){
        margin: 0 -8rem 0 -8rem;
    }
    @media screen and (max-width: 1258px){
        margin: 0 -7rem 0 -7rem;
    }
    @media screen and (max-width: 1168px){
        margin: 0 -6rem 0 -6rem;
    }
    @media screen and (max-width: 1107px){
        margin: 0 -5rem 0 -5rem;
    }

`

export const SearchButton = styled.div`
    padding: 11.5px;
    background: var(--primary-color);
    color: var(--thin-color);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    display: flex;
    justify-content: center;
`

export const Logo = styled.img.attrs({
    src: logo
})`
    width: auto;
`

export const MenuItem = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .3rem;
    margin-left: .5rem;

    li{
        padding: 10px;
        color: var(--dark-color);
    }

    @media screen and (max-width: 290px){
        margin-left: unset;
    }

`