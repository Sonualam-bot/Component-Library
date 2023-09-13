import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const CodeBlock = ({ code }) => {
    return (
        <SyntaxHighlighter
            language="typescript"
            style={stackoverflowDark}
            wrapLines={true}
            customStyle={{
                padding: "1rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                // width: "750px"
            }}
        >
            {code}
        </SyntaxHighlighter>
    );
};