import { Line } from "../components/Button/Button";
import { Notification, Icon, Count, renderCount, BadgeContainer, LetterBadge, Status } from "../components/Badge/Badge"

import { BsFillCartCheckFill } from "react-icons/bs"
import { IoMdNotifications } from "react-icons/io"
import { CodeBlock } from "./codeblock/CodeBlock";


export const BadgeDoc = () => {

    const code = `
    <Notification>
            <Icon> <BsFillCartCheckFill /> </Icon>
            <Count> {renderCount(2)} </Count>
    </Notification>
    <Notification bg="#f97316" >
        <Icon > <IoMdNotifications style={{ fontSize: "35px" }} /> </Icon>
        <Count> {renderCount(25)} </Count>
    </Notification>
    `

    const code1 = `
        <LetterBadge> M <Status activity="online" /> </LetterBadge>
        <LetterBadge> S <Status activity="do not disturb" /> </LetterBadge>
        <LetterBadge> A <Status activity="offline" /> </LetterBadge>
    `
    return (
        <>
            <div>
                <h1>Badge</h1>
                <p>A badge is a small visual indicator or element that is typically used in user interfaces to convey specific information or status about an item, feature, or element. Badges are commonly used to provide quick, at-a-glance information or to draw attention to certain elements. They often consist of a short piece of text or a small icon enclosed in a visually distinct shape, such as a circle or rectangle.</p>
                <Line />
            </div>
            <div>
                <h1>Notification Badge</h1>

                <BadgeContainer>
                    <Notification>
                        <Icon> <BsFillCartCheckFill /> </Icon>
                        <Count> {renderCount(2)} </Count>
                    </Notification>
                    <Notification bg="#f97316" >
                        <Icon > <IoMdNotifications style={{ fontSize: "35px" }} /> </Icon>
                        <Count> {renderCount(25)} </Count>
                    </Notification>
                </BadgeContainer>

                <div>
                    <CodeBlock code={code} />
                </div>
            </div >
            <div>
                <h1>Letter Badge</h1>
                <Line />
                <BadgeContainer>
                    <LetterBadge> M <Status activity="online" /> </LetterBadge>
                    <LetterBadge> S <Status activity="do not disturb" /> </LetterBadge>
                    <LetterBadge> A <Status activity="offline" /> </LetterBadge>
                </BadgeContainer>
                <div>
                    <CodeBlock code={code1} />
                </div>
            </div>
        </>
    );
};

