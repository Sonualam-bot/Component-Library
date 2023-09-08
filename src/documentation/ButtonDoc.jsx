import StyledButton, {
    FancyButton,
    SubmitButton,
    DarkButton,
    Container,
    Line,
    ContainerIcon,
    StyledIconButton,
    DangerButton
} from "../components/Button/Button";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import "./Universal.css"

//icons
import { AiOutlineDownload, AiOutlineMail, AiOutlineDelete } from "react-icons/ai"
import { BsSend } from "react-icons/bs"

const theme = {
    dark: {
        primary: "#000",
        text: "#fff"
    },
    light: {
        primary: "#fff",
        text: "#000"
    },
    fontfamily: "Segoe UI"
};

const GlobalStyle = createGlobalStyle`
    button{
  
      font-family: ${(props) => props.theme.fontfamily}
    }
  `;

// font-family: 'Roboto';

export const ButtonDoc = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <h1>Buttons</h1>
                <p>Buttons allow users to take actions, and make choices, with a single tap.</p>

                <Line />
                <Container>
                    <StyledButton type="submit"> Contained </StyledButton>

                    <StyledButton variant="outline"> Outlined </StyledButton>

                    <FancyButton>Fancy Button</FancyButton>

                    <SubmitButton>Submit Button</SubmitButton>

                    <DarkButton>Dark theme</DarkButton>
                </Container>

                <div>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&width=680&ds=true&dsyoff=98px&dsblur=69px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=18px&lh=148%25&si=false&es=2x&wm=false&code=%2520%2520%253CStyledButton%2520type%253D%2522submit%2522%253E%2520StyledButton%2520%253C%252FStyledButton%253E%250A%250A%2520%253CStyledButton%2520variant%253D%2522outline%2522%253E%2520StyledButton%2520%253C%252FStyledButton%253E%2520%2520%2520%2520%2520%2520%2520%250A%250A%2520%253CFancyButton%253EFancy%2520Button%253C%252FFancyButton%253E%250A%250A%2520%253CSubmitButton%253ESubmitButton%253C%252FSubmitButton%253E%250A%250A%2520%253CDarkButton%253EDark%2520theme%253C%252FDarkButton%253E%250A%250A"
                        style={{ width: "769px", height: "350px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>
                </div>
                <h1>Icon Buttons</h1>
                <Line />


                <ContainerIcon>
                    <StyledIconButton variant="icon"> <AiOutlineDownload /> Download </StyledIconButton>

                    <StyledButton variant="outline"> <AiOutlineMail /> Email </StyledButton>

                    <DangerButton variant="danger" > <AiOutlineDelete /> Delete</DangerButton>

                    <SubmitButton> <BsSend /> Submit </SubmitButton>

                </ContainerIcon>

                <div>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&width=680&ds=true&dsyoff=98px&dsblur=69px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=18px&lh=148%25&si=false&es=2x&wm=false&code=%2520%253CStyledIconButton%2520variant%253D%2522icon%2522%253E%2520%253CAiOutlineDownload%2520%252F%253E%2520Download%2520%253C%252FStyledIconButton%253E%2520%2520%2520%250A%250A%2520%253CStyledButton%2520variant%253D%2522outline%2522%253E%2520%253CAiOutlineMail%2520%252F%253E%2520Email%2520%253C%252FStyledButton%253E%250A%250A%2520%253CDangerButton%2520variant%253D%2522danger%2522%2520%253E%2520%253CAiOutlineDelete%2520%252F%253E%2520Delete%253C%252FDangerButton%253E%250A%250A%2520%253CSubmitButton%253E%2520%253CBsSend%2520%252F%253E%2520Submit%2520%253C%252FSubmitButton%253E%250A%250A"
                        style={{ width: "975px", height: "297px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>
                </div>

            </ThemeProvider>
        </>
    );
};
