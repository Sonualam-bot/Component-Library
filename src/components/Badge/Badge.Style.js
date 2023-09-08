import styled from "styled-components";

export const Notification = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => props.bg ? props.bg : "#fbbf24"} ;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 600;
`;


export const Icon = styled.span`
  font-size: ${(props) => props.size ? props.size : "30px"};
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100%;
`;


export const Count = styled.span`
  position: absolute;
  top: -8px; 
  right: -4px; 
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
  border: 1px solid #fff;
  min-width: 20px;
  min-height: 20px;
`;


export const BadgeContainer = styled.div`
    display: flex;
    gap: 0.9rem;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 1rem;
`

export const LetterBadge = styled(Notification)`
    background-color:#60a5fa;
`

export const Status = styled(Count)`
    top: 35px;
    right: -5px;
    background-color: ${(props) => {
        if (props.activity === "online") {
            return "#16a34a"
        }
        if (props.activity === "do not disturb") {
            return "#dc2626"
        }
        if (props.activity === "offline") {
            return "#a8a29e"
        }
    }} ;
    height: 4px;
    width: 4px;
`