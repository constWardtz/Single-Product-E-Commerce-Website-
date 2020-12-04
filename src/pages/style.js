import styled from 'styled-components'

export const HomePageSection = styled.div`
    display: grid;
`

export const ProductPageSection = styled.div`
    display: grid;
`

/* Products Main Container */ 
export const ProductSectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
`

export const MarginTop = styled.div`
    margin-top: ${({margin}) => margin ? margin : '1rem'};
`

/* Footer Section Container */ 
export const FooterSectionContainer = styled.div`
    height: 80vh;
    background: var(--primary-color);
`