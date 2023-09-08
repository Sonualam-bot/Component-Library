import { AlertContainer, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon, AlertParentContainer, CloseIcon } from "./Alert.Style";


const Alert = ({ severity, children }) => {
    return (
        <>
            <AlertContainer severity={severity} >
                {severity === "error" && <ErrorIcon /> && <CloseIcon /> || severity === "warning" && <WarningIcon /> && <CloseIcon /> ||
                    severity === "info" && <InfoIcon /> && <CloseIcon /> ||
                    severity === "success" && <SuccessIcon /> && <CloseIcon />
                }
                {children}
            </AlertContainer>
        </>
    )
}



export { Alert, AlertParentContainer }