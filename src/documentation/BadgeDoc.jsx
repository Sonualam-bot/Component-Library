import { Line } from "../components/Button/Button";
import { Notification, Icon, Count, renderCount, BadgeContainer, LetterBadge, Status } from "../components/Badge/Badge"

import { BsFillCartCheckFill } from "react-icons/bs"
import { IoMdNotifications } from "react-icons/io"


export const BadgeDoc = () => {
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
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&width=680&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=18px&lh=162%25&si=false&es=2x&wm=false&code=%2509%250A%2520%2520%2520%253CNotification%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CIcon%253E%2520%253CBsFillCartCheckFill%2520%252F%253E%2520%253C%252FIcon%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CCount%253E%2520%257BrenderCount%282%29%257D%2520%253C%252FCount%253E%250A%2520%2520%2520%253C%252FNotification%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%253CNotification%2520bg%253D%2522%2523f97316%2522%2520%253E%250A%2520%2520%2520%2520%2520%253CIcon%2520%253E%2520%253CIoMdNotifications%2520style%253D%257B%257B%2520fontSize%253A%2520%252235px%2522%2520%257D%257D%2520%252F%253E%2520%253C%252FIcon%253E%2520%2520%250A%2520%2520%2520%2520%2520%253CCount%253E%2520%257BrenderCount%2825%29%257D%2520%253C%252FCount%253E%250A%2520%2520%2520%253C%252FNotification%253E%250A%250A"
                        style={{ width: "829px", height: "424px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>
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
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&width=680&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=18px&lh=162%25&si=false&es=2x&wm=false&code=%2509%250A%2520%253CLetterBadge%253E%2520M%2520%253CStatus%2520activity%253D%2522online%2522%2520%252F%253E%2520%253C%252FLetterBadge%253E%250A%2520%253CLetterBadge%253E%2520S%2520%253CStatus%2520activity%253D%2522do%2520not%2520disturb%2522%2520%252F%253E%2520%253C%252FLetterBadge%253E%2520%2520%2520%250A%2520%253CLetterBadge%253E%2520A%2520%253CStatus%2520activity%253D%2522offline%2522%2520%252F%253E%2520%253C%252FLetterBadge%253E%250A%250A"
                        style={{ width: "807px", height: "249px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>

                </div>
            </div>
        </>
    );
};

