import { Line } from "../components/Button/Button";

import {
  AvatarSmall,
  AvatarMedium,
  AvatarLarge,
  AvatarContainer,
  LetterSmall,
  LetterMedium,
  LetterLarge,
} from "../components/Avatar/Avatar";
import { CodeBlock } from "./codeblock/CodeBlock";
import {
  AvatarIndiContainer,
  DoNotDisturb,
  UserOffline,
  UserStatus,
} from "../components/Avatar/Avatar.Style";

export const AvatarDoc = () => {
  const code = `
    <AvatarSmall src="https://example.jpeg" height="70px" width="70px" />
    <AvatarMedium src="https://example.jpeg" height="100px" width="100px" />
    <AvatarLarge src="https://example.jpeg" height="120px" width="120px" />
    `;

  const code1 = `
    <LetterSmall src="" bg="" height="60px" width="60px" >S</LetterSmall>
    <LetterMedium src="" bg="#06b6d4" height="90px" width="90px" >M</LetterMedium>
    <LetterLarge src="" bg="#3b82f6" height="120px" width="120px" >A</LetterLarge>
    `;

  const code3 = `
          <AvatarIndiContainer>
            <AvatarSmall src="" height="70px" width="70px"/>
            <UserStatus activity="online" />
          </AvatarIndiContainer>

          <AvatarIndiContainer>
            <AvatarMedium src="" height="100px" width="100px"/>
            <DoNotDisturb activity="do not disturb" />
          </AvatarIndiContainer>

          <AvatarIndiContainer>
            <AvatarLarge src="" height="120px" width="120px"/>
            <UserOffline activity="offline" />
          </AvatarIndiContainer>`;

  return (
    <>
      <div>
        <h1>Avatar</h1>
        <p>
          {" "}
          An avatar is a graphical representation of a user or the user&apos;s
          character or persona.
        </p>
        <Line />
        <div>
          <AvatarContainer>
            <AvatarSmall
              src="https://storage.googleapis.com/pai-images/7a71a267a95a4cef902baa233bfadc71.jpeg"
              height="70px"
              width="70px"
            />
            <AvatarMedium
              src="https://storage.googleapis.com/pai-images/7a71a267a95a4cef902baa233bfadc71.jpeg"
              height="100px"
              width="100px"
            />
            <AvatarLarge
              src="https://storage.googleapis.com/pai-images/7a71a267a95a4cef902baa233bfadc71.jpeg"
              height="120px"
              width="120px"
            />
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
            <LetterSmall src="" bg="" height="60px" width="60px">
              S
            </LetterSmall>
            <LetterMedium src="" bg="#06b6d4" height="90px" width="90px">
              M
            </LetterMedium>
            <LetterLarge src="" bg="#3b82f6" height="120px" width="120px">
              A
            </LetterLarge>
          </AvatarContainer>
          <div>
            <CodeBlock code={code1} />
          </div>
        </div>
      </div>
      <div>
        <h1>Avatar with Badge</h1>
        <Line />
        <AvatarContainer>
          <AvatarIndiContainer>
            <AvatarSmall
              src="https://storage.googleapis.com/pai-images/7a71a267a95a4cef902baa233bfadc71.jpeg"
              height="70px"
              width="70px"
            />
            <UserStatus activity="online" />
          </AvatarIndiContainer>

          <AvatarIndiContainer>
            <AvatarMedium
              src="https://storage.googleapis.com/pai-images/7a71a267a95a4cef902baa233bfadc71.jpeg"
              height="100px"
              width="100px"
            />
            <DoNotDisturb activity="do not disturb" />
          </AvatarIndiContainer>

          <AvatarIndiContainer>
            <AvatarLarge
              src="https://storage.googleapis.com/pai-images/7a71a267a95a4cef902baa233bfadc71.jpeg"
              height="120px"
              width="120px"
            />
            <UserOffline activity="offline" />
          </AvatarIndiContainer>
        </AvatarContainer>
        <div>
          <CodeBlock code={code3} />
        </div>
      </div>
    </>
  );
};
