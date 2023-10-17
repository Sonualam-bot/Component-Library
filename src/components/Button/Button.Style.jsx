import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #818cf8;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#818cf8"};
  color: ${(props) => (props.variant === "outline" ? "#6366f1" : "#FFF")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s all ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#818cf8"};
    color: ${(props) => (props.variant !== "outline" ? "#818cf8" : "#FFF")};
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
  type: "Submit",
})`
  box-shadow: 0 9px #818cf8;
  background-color: #818cf8;
  &:hover {
    color: #818cf8;
  }
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#818cf8" : "#FFF"};
    box-shadow: 0 5px #818cf8;
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
`;
export const ContainerIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5rem;
  margin: 1rem 0;
`;

export const FloatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  margin: 1rem;
`;

export const Line = styled.hr`
  font-weight: 600;
  color: grey;
  margin: 1rem 0 1rem 0;
  width: 80vw;
`;

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
`;

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

const FloatingBtn = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  background-color: #0074e4;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
  }

  ${(props) =>
    props.action === "search" &&
    `
    background-color: #3498db; 
  `}
  ${(props) =>
    props.action === "edit" &&
    `
    background-color: #f39c12; 
  `}
    ${(props) =>
    props.action === "delete" &&
    `
    background-color: #e74c3c; 
  `};
`;

const FloatingActionButton = ({ action }) => {
  return <FloatingBtn action={action}>{getIconForAction(action)}</FloatingBtn>;
};

function getIconForAction(action) {
  switch (action) {
    case "search":
      return "🔍";
    case "edit":
      return "✏️";
    case "delete":
      return "🗑️";
    default:
      return "+";
  }
}

export default FloatingActionButton;
