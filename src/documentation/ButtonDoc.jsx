import StyledButton, {
  FancyButton,
  SubmitButton,
  DarkButton,
  Container,
  Line,
  ContainerIcon,
  StyledIconButton,
  DangerButton,
} from "../components/Button/Button";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import "./Universal.css";

//icons
import {
  AiOutlineDownload,
  AiOutlineMail,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { CodeBlock } from "./codeblock/CodeBlock";
import FloatingActionButton, {
  FloatingContainer,
} from "../components/Button/Button.Style";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontfamily: "Segoe UI",
};

const GlobalStyle = createGlobalStyle`
    button{
  
      font-family: ${(props) => props.theme.fontfamily}
    }
  `;

const code = `
<StyledButton type="submit"> Contained </StyledButton>

<StyledButton variant="outline"> Outlined </StyledButton>

<FancyButton>Fancy Button</FancyButton>

<SubmitButton>Submit Button</SubmitButton>

<DarkButton>Dark theme</DarkButton>
`;

const code1 = `
<StyledIconButton variant="icon"> <AiOutlineDownload /> Download </StyledIconButton>

<StyledButton variant="outline"> <AiOutlineMail /> Email </StyledButton>

<DangerButton variant="danger" > <AiOutlineDelete /> Delete</DangerButton>

<SubmitButton> <BsSend /> Submit </SubmitButton>
`;

const code2 = `
<FloatingActionButton action="search" />
<FloatingActionButton action="edit" />
<FloatingActionButton action="delete" />
<FloatingActionButton action="add" />`;

export const ButtonDoc = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Buttons</h1>
        <p>
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </p>

        <Line />
        <Container>
          <StyledButton type="submit"> Contained </StyledButton>

          <StyledButton variant="outline"> Outlined </StyledButton>

          <FancyButton>Fancy Button</FancyButton>

          <SubmitButton>Submit Button</SubmitButton>

          <DarkButton>Dark theme</DarkButton>
        </Container>

        <div>
          <CodeBlock code={code} />
        </div>
        <Line />
        <h1>Icon Buttons</h1>

        <ContainerIcon>
          <StyledIconButton variant="icon">
            {" "}
            <AiOutlineDownload /> Download{" "}
          </StyledIconButton>

          <StyledButton variant="outline">
            {" "}
            <AiOutlineMail /> Email{" "}
          </StyledButton>

          <DangerButton variant="danger">
            {" "}
            <AiOutlineDelete /> Delete
          </DangerButton>

          <SubmitButton>
            {" "}
            <BsSend /> Submit{" "}
          </SubmitButton>
        </ContainerIcon>

        <div>
          <CodeBlock code={code1} />
        </div>
        <Line />
        <h1>Floating Action Button Components</h1>
        <p>
          Floating action button components provides quick actions for user
          interation.
        </p>

        <FloatingContainer>
          <FloatingActionButton action="search" />
          <FloatingActionButton action="edit" />
          <FloatingActionButton action="delete" />
          <FloatingActionButton action="add" />
        </FloatingContainer>
        <div>
          <CodeBlock code={code2} />
        </div>
      </ThemeProvider>
    </>
  );
};
