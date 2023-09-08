import { FaExclamationCircle } from "react-icons/fa";
import { CiWarning } from "react-icons/ci"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { BsCheck2Circle } from "react-icons/bs"
import { LiaTimesCircleSolid } from 'react-icons/lia'

import styled from "styled-components";

export const AlertContainer = styled.div`
  background-color: ${(props) => {
        if (props.severity === "error") return "#991b1b";
        if (props.severity === "warning") return "#eab308";
        if (props.severity === "info") return "#0ea5e9";
        if (props.severity === "success") return "#166534";
        return "#6EE7B7";
    }};
  color: #fff;
  padding: 0.6rem;
  border-radius: 3px;
  font-size: 0.9rem;
  width: 55%;
  display: flex;
  align-items: center;
  position: relative;
`;


export const ErrorIcon = styled(FaExclamationCircle)`
  margin-right: 0.5rem;
`;
export const WarningIcon = styled(CiWarning)`
  margin-right: 0.5rem;
`;
export const InfoIcon = styled(AiOutlineInfoCircle)`
  margin-right: 0.5rem;
`;
export const SuccessIcon = styled(BsCheck2Circle)`
  margin-right: 0.5rem;
`;


export const CloseIcon = styled(LiaTimesCircleSolid)`
  right: 0.5rem;
  position: absolute;
  cursor: pointer;
  transition: transform 0.2s ease-in-out; 
    &:active {
    transform: scale(1.2);
    }

`;



export const AlertParentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 0;
`

