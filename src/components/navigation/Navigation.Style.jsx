import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0f172a;
    color: #ffffff;
    padding: 0.4rem 1rem;
    font-weight: 600;
    border-radius: 0.8rem;
    margin: 1rem 0;
    

    
    div{
        display: flex;
        gap: 1.7rem;
        cursor: pointer;
        text-decoration: none;

        a{
            text-decoration: none;
            color: #FFFFFF;
        }
    }
    
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:active{
    scale: 1.2;

  }

  .icon {
    font-size: 24px;
    
  }
`;

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    font-size: 24px;
   
  }
`;


export const BottomNavigation = styled(Box)`
 display: flex;
 justify-content: space-between;
 width: 500px;

 svg{
    font-size: 1.8rem;
 }

`