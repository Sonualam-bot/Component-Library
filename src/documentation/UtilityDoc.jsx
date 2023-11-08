import { Line } from "../components/Button/Button.Style";
import {
  FontDiv,
  HeadingContaner,
  FontDivContainer,
  Bold,
} from "../components/Utility/Utility.Style";
import { CodeBlock } from "./codeblock/CodeBlock";

export const UtilityDoc = () => {
  const code = `
    <HeadingContaner>
        <h1>Heading 1 - SleekStyles UI</h1>
        <h2>Heading 2 - SleekStyles UI</h2>
        <h3>Heading 3 - SleekStyles UI</h3>
        <h4>Heading 4 - SleekStyles UI</h4>
        <h5>Heading 5 - SleekStyles UI</h5>
        <h6>Heading 6 - SleekStyles UI</h6>
    </HeadingContaner>
    `;
  const code1 = `
    <FontDivContainer>
        <FontDiv size="0.7rem">
            With Great powers, come great responsibility.
        </FontDiv>
        <FontDiv size="0.8rem">
            With Great powers, come great responsibility.
        </FontDiv>
        <FontDiv size="0.9rem">
            With Great powers, come great responsibility.
        </FontDiv>
        <FontDiv size="1rem">
            With Great powers, come great responsibility.
        </FontDiv>
        <FontDiv size="1.1rem">
            With Great powers, come great responsibility.
        </FontDiv>
    </FontDivContainer>
    `;

  const code2 = `
    <FontDivContainer>
        <Bold weight={180} >
            With Great powers, come great responsibility.
        </Bold>
        <Bold weight={250} >
            With Great powers, come great responsibility.
        </Bold>
        <Bold weight={340} >
            With Great powers, come great responsibility.
        </Bold>
        <Bold weight={430} >
            With Great powers, come great responsibility.
        </Bold>
        <Bold weight={500} >
            With Great powers, come great responsibility.
        </Bold>
    </FontDivContainer>
    `;
  return (
    <>
      <h2>Utility Component</h2>
      <p>
        A utility class is a class that is just a namespace for functions. No
        instances of it can exist, and all its members are static.
      </p>
      <Line />
      <h2>Headings</h2>
      <HeadingContaner>
        <h1>Heading 1 - SleekStyles UI</h1>
        <h2>Heading 2 - SleekStyles UI</h2>
        <h3>Heading 3 - SleekStyles UI</h3>
        <h4>Heading 4 - SleekStyles UI</h4>
        <h5>Heading 5 - SleekStyles UI</h5>
        <h6>Heading 6 - SleekStyles UI</h6>
      </HeadingContaner>
      <CodeBlock code={code} />
      <Line />
      <h2>Font-Sizes</h2>
      <FontDivContainer>
        <FontDiv size="0.7rem">
          With Great powers, come great responsibility.
        </FontDiv>
        <FontDiv size="0.8rem">
          With Great powers, come great responsibility.
        </FontDiv>
        <FontDiv size="0.9rem">
          With Great powers, come great responsibility.
        </FontDiv>
        <FontDiv size="1rem">
          With Great powers, come great responsibility.
        </FontDiv>
        <FontDiv size="1.1rem">
          With Great powers, come great responsibility.
        </FontDiv>
      </FontDivContainer>
      <CodeBlock code={code1} />
      <Line />
      <h2>Font-Weight</h2>
      <FontDivContainer>
        <Bold weight={180}>With Great powers, come great responsibility.</Bold>
        <Bold weight={250}>With Great powers, come great responsibility.</Bold>
        <Bold weight={340}>With Great powers, come great responsibility.</Bold>
        <Bold weight={430}>With Great powers, come great responsibility.</Bold>
        <Bold weight={500}>With Great powers, come great responsibility.</Bold>
      </FontDivContainer>
      <CodeBlock code={code2} />
    </>
  );
};
