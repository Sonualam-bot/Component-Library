import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #42A5F5;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#42A5F5"};
  color: ${(props) => (props.variant === "outline" ? "#42A5F5" : "#FFF")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props) =>
    props.variant !== "outline" ? "#FFF" : "#42A5F5"};
    color: ${(props) => (props.variant !== "outline" ? "#42A5F5" : "#FFF")};
  }
`;

export const FancyButton = styled(StyledButton)`
  background: radial-gradient(
    circle,
    rgba(245, 79, 31, 1) 0%,
    rgba(236, 30, 72, 1) 100%
  );
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "Submit"
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
    props.variant !== "outline" ? "#FFF" : "#42A5F5"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5rem;
`
export const ContainerIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5rem;
`

export const Line = styled.hr`
  font-weight: 600;
  color: grey;
  margin: 1rem 0 1rem 0;
  width: 80vw;
`


export const StyledIconButton = styled(StyledButton)`
border: 2px solid #065f46;
   background-color: ${(props) =>
    props.variant === "icon" ? "#FFF" : "#065f46"};
  color: ${(props) => (props.variant === "icon" ? "#404040" : "#FFF")};
&:hover {
    background-color: ${(props) =>
    props.variant !== "icon" ? "#FFF" : "#065f46"};
    color: ${(props) => (props.variant !== "icon" ? "#065f46" : "#FFF")};
}
`

export const DangerButton = styled(StyledButton)`
  border: 2px solid #b91c1c;
   background-color: ${(props) =>
    props.variant === "danger" ? "#b91c1c" : "#FFF"};
  color: ${(props) => (props.variant === "danger" ? "#FFF" : "#b91c1c")};
  &:hover {
    background-color: ${(props) =>
    props.variant !== "danger" ? "#FFF" : "#b91c1c"};
    color: ${(props) => (props.variant !== "danger" ? "#b91c1c" : "#FFF")};
}
  
`;