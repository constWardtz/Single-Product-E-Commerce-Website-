import styled from 'styled-components'

export const FooterContainer = styled.div`
    color: var(--light-color);
    display: grid;
`

export const LineOne = styled.div`
    padding: 6rem;

    /* Layout */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ul{
        padding: 1rem;

        li{
            h1{
                font-weight: var(--font-weight-500);
            }
        }
        
        li{
            padding: 1rem;
            a{
                color: var(--light-color);
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                    transition: all ease-in-out .3s;
                }
            }
            i{
                &:hover{
                    color: var(--thin-color);
                    cursor: pointer;
                    transition: all ease-in-out .3s;
                }
            }
        }
    }

    /* About JPG Footer */
    ul:nth-child(1){
        
    }

    /* Social Media Footer */
    ul:nth-child(2){
        li{
            a{
                padding: 1rem;
            }

            i{
            
            }
        }
    }

    /* Help & FAQs Footer */
    ul:nth-child(3){

    }

    /* Logo Footer */
    ul:nth-child(4){
        li{
        }
    }
`

export const LineTwo = styled.div`
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