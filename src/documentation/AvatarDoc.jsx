import { Line } from "../components/Button/Button";

import { AvatarSmall, AvatarMedium, AvatarLarge, AvatarContainer, LetterSmall, LetterMedium, LetterLarge } from "../components/Avatar/Avatar"

export const AvatarDoc = () => {
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
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&width=680&ds=true&dsyoff=98px&dsblur=69px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=18px&lh=148%25&si=false&es=2x&wm=false&code=%253CAvatarSmall%2520src%253D%2522https%253A%252F%252Fstorage.googleapis.com%252Fpai-images%252F7a71a267a95a4cef902baa233bfadc71.jpeg%2522%2520height%253D%252270px%2522%2520width%253D%252270px%2522%2520%252F%253E%250A%2520%2520%250A%2520%253CAvatarMedium%2520src%253D%2522https%253A%252F%252Fstorage.googleapis.com%252Fpai-images%252F7a71a267a95a4cef902baa233bfadc71.jpeg%2522%2520height%253D%2522100px%2522%2520width%253D%2522100px%2522%2520%252F%253E%250A%2520%2520%2520%250A%253CAvatarLarge%2520src%253D%2522https%253A%252F%252Fstorage.googleapis.com%252Fpai-images%252F7a71a267a95a4cef902baa233bfadc71.jpeg%2522%2520height%253D%2522120px%2522%2520width%253D%2522120px%2522%2520%252F%253E%250A%250A"
                            style={{ width: "1024px", height: "323px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
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
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&width=680&ds=true&dsyoff=98px&dsblur=69px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=18px&lh=148%25&si=false&es=2x&wm=false&code=%2509%250A%2509%253CLetterSmall%2520src%253D%2522%2522%2520bg%253D%2522%2522%2520height%253D%252260px%2522%2520width%253D%252260px%2522%2520%253ES%253C%252FLetterSmall%253E%2509%250A%250A%2509%253CLetterMedium%2520src%253D%2522%2522%2520bg%253D%2522%252306b6d4%2522%2520height%253D%252280px%2522%2520width%253D%252280px%2522%2520%253EM%253C%252FLetterMedium%253E%2509%2509%250A%250A%2509%253CLetterLarge%2520src%253D%2522%2522%2520bg%253D%2522%25233b82f6%2522%2520height%253D%2522100px%2522%2520width%253D%2522100px%2522%2520%253EA%253C%252FLetterLarge%253E%250A%250A"
                            style={{ width: "975px", height: "270px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
};
