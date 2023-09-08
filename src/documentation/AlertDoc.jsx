import { Line } from "../components/Button/Button";

import { Alert, AlertParentContainer } from "../components/Alert/Alert"

export const AlertDoc = () => {
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
            {/* <div> */}
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&width=680&ds=true&dsyoff=98px&dsblur=69px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=18px&lh=148%25&si=false&es=2x&wm=false&code=%2509%250A%2520%2520%2520%253CAlert%2520severity%253D%2522error%2522%2520%253EThis%2520is%2520an%2520error%2520alert%2520--check%2520it%2520out.%253C%252FAlert%253E%2520%250A%250A%2520%2520%2520%253CAlert%2520severity%253D%2522warning%2522%2520%253EThis%2520is%2520an%2520warning%2520alert%2520--check%2520it%2520out.%253C%252FAlert%253E%250A%250A%2520%2520%2520%253CAlert%2520severity%253D%2522info%2522%2520%253EThis%2520is%2520an%2520info%2520alert%2520--check%2520it%2520out.%253C%252FAlert%253E%2520%2520%2520%2520%2520%2520%2520%2520%250A%250A%2520%2520%2520%253CAlert%2520severity%253D%2522success%2522%2520%253EThis%2520is%2520an%2520success%2520alert%2520--check%2520it%2520out.%253C%252FAlert%253E%250A%250A"
                style={{ width: "905px", height: "340px", border: "0", marginLeft: "-10px", transform: "scale(1)", overflow: "hidden" }}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            {/* </div> */}
        </>
    );
};
