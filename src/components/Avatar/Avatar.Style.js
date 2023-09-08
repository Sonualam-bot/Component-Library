import styled from "styled-components"

export const AvatarSmall = styled.img`
    border-radius: 50%;
    background-image: ${(props) => props.src ? props.src : ""};
    height: ${(props) => props.height ? props.height : "60px"} ;
    width: ${(props) => props.width ? props.width : "60px"} ;
    object-fit: cover;
    border: 1px solid grey;
`

export const AvatarMedium = styled(AvatarSmall)`
 height: ${(props) => props.height ? props.height : "80px"} ;
    width: ${(props) => props.width ? props.width : "80px"} ;
`
export const AvatarLarge = styled(AvatarSmall)`
 height: ${(props) => props.height ? props.height : "100px"} ;
    width: ${(props) => props.width ? props.width : "100px"} ;
`

export const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    gap: 0.6rem;
    margin-bottom: 1rem;
`

export const LetterSmall = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.5rem;
    border-radius: 50%;
    background-image: ${(props) => props.src ? props.src : ""};
    height: ${(props) => props.height ? props.height : "60px"} ;
    width: ${(props) => props.width ? props.width : "60px"} ;
    object-fit: cover;
    border: 1px solid grey;
    background-color:  ${(props) => props.bg ? props.bg : "#475569"} ;   
`

export const LetterMedium = styled(LetterSmall)`
    font-size: 2rem;
    height: ${(props) => props.height ? props.height : "90px"} ;
    width: ${(props) => props.width ? props.width : "90px"} ;
`

export const LetterLarge = styled(LetterSmall)`
    font-size: 2.5rem;
    height: ${(props) => props.height ? props.height : "120px"} ;
    width: ${(props) => props.width ? props.width : "120px"} ;
`