import { Line } from "../components/Button/Button";

import { AvatarSmall, AvatarMedium, AvatarLarge, AvatarContainer, LetterSmall, LetterMedium, LetterLarge } from "../components/Avatar/Avatar"
import { CodeBlock } from "./codeblock/CodeBlock";


export const AvatarDoc = () => {
    const code = `
    <AvatarSmall src="https://example.jpeg" height="70px" width="70px" />
    <AvatarMedium src="https://example.jpeg" height="100px" width="100px" />
    <AvatarLarge src="https://example.jpeg" height="120px" width="120px" />
    `

    const code1 = `
    <LetterSmall src="" bg="" height="60px" width="60px" >S</LetterSmall>
    <LetterMedium src="" bg="#06b6d4" height="90px" width="90px" >M</LetterMedium>
    <LetterLarge src="" bg="#3b82f6" height="120px" width="120px" >A</LetterLarge>
    `

    return (
        <>
            <div>
                <h1>Avatar</h1>
                <p> An avatar is a graphical representation of a user or the user's character or persona.</p>
                <Line />
                <div>

                    <AvatarContainer>
                        <AvatarSmall src="https://storage.googleapis.com/pai-images/7a71a267a95a4cef902baa233bfadc71.jpeg" height="70px" width="70px" />
                        <AvatarMedium src="https://storage.googleapis.com/pai-images/7a71a267a95a4cef902baa233bfadc71.jpeg" height="100px" width="100px" />
                        <AvatarLarge src="https://storage.googleapis.com/pai-images/7a71a267a95a4cef902baa233bfadc71.jpeg" height="120px" width="120px" />
                    </AvatarContainer>
                    <div>
                        <CodeBlock code={code} />
                    </div>
                </div>

            </div>
            <div>
                <h1>Letter Avatars</h1>
                <Line />
                <div>
                    <AvatarContainer>
                        <LetterSmall src="" bg="" height="60px" width="60px" >S</LetterSmall>
                        <LetterMedium src="" bg="#06b6d4" height="90px" width="90px" >M</LetterMedium>
                        <LetterLarge src="" bg="#3b82f6" height="120px" width="120px" >A</LetterLarge>
                    </AvatarContainer>
                    <div>
                        <CodeBlock code={code1} />
                    </div>
                </div>
            </div>
        </>
    );
};
