import { Line } from "../components/Button/Button";

import { Alert, AlertParentContainer } from "../components/Alert/Alert"
import { CodeBlock } from "./codeblock/CodeBlock";

export const AlertDoc = () => {
    const code = `
    <Alert severity="error"  > This is an not error alert --check it out.</Alert>
    <Alert severity="warning" >This is an warning alert --check it out.</Alert>
    <Alert severity="info" >This is an info alert --check it out.</Alert>
    <Alert severity="success" >This is an success alert --check it out.</Alert>
    `
    return (
        <>
            <div>
                <h1>Alert</h1>
                <p>An alert typically refers to a visual or auditory notification or warning message designed to grab a user's attention and provide important information or feedback in various software applications, websites, or systems.</p>
                <Line />

                <AlertParentContainer>
                    <Alert severity="error"  > This is an not error alert --check it out.</Alert>
                    <Alert severity="warning" >This is an warning alert --check it out.</Alert>
                    <Alert severity="info" >This is an info alert --check it out.</Alert>
                    <Alert severity="success" >This is an success alert --check it out.</Alert>
                </AlertParentContainer>


            </div>
            <div>
                <CodeBlock code={code} />

            </div>
        </>
    );
};
