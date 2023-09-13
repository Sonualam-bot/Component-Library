import styled from "styled-components";

export const HeadingContaner = styled.div`
    margin: 1rem;
    text-align: center;
`

export const FontDiv = styled.div`
    font-size:  ${(props) => props.size} ;
    margin: 0 auto;
`
export const Bold = styled.div`
    font-weight:  ${(props) => props.weight} ;
    margin: 0 auto;
`

export const FontDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`