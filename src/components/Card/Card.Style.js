import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
  overflow: hidden;
  border-radius: 9px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 310px;
  margin: 1rem;

  &:hover {
    box-shadow: 0 0px 8px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #111827;
`;

export const CardIcon = styled.div`
  svg {
    transition: color 0.3s;
  }
  svg:hover {
    color: #dc2626;
  }
`;

export const CardPrice = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 14px;
    margin: 5px 0;
    font-weight: bold;
  }

  p:nth-child(1) {
    text-decoration: line-through;
    color: #9ca3af;
  }
  p:nth-child(3) {
    color: #fb7185;
  }
`;

export const Typography = styled.div`
  text-align: left;
  margin: 0.7rem 0;
  line-height: 1.3rem;
  font-family: "Sans";
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 9px 18px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;

    svg {
      margin-right: 5px;
      font-size: 1.1rem;
    }

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const HorizontalContainer = styled(CardContainer)`
  display: flex;
  border-radius: 15px;
  flex-direction: row;
  max-width: 440px;
  padding: 0px;
  overflow: hidden;

  img {
    width: 40%;
    padding: 0;
  }

  div {
    padding: 4px;
  }
`;

export const VerticalContainer = styled(HorizontalContainer)`
  flex-direction: column;
  height: 450px;
  position: relative;

  img {
    width: 100%;
    height: 45%;
    padding: 0;
  }

  div {
    padding: 6px 6px 0 6px;
  }
`;

export const VIcon = styled(CardIcon)`
  position: absolute;
  top: 0;
  background-color: #0056b3;
  right: 0;
  border-radius: 0 0 0 8px;
  svg {
    color: #fff;
  }
`;

export const SimpleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  width: 250px;
  height: 120px;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid grey;
`;
export const DismissCard = styled(SimpleCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 300px;
  height: 180px;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 10px;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const CardContent = styled.div`
  margin-top: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 80%;
`;

// /text overlay

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background: #f2f2f2;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 60%;
  left: 0;
  width: 100%;
  height: 40%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 0.4rem 0;
`;

export const HoverCard = styled.div`
  position: relative;
  max-width: 320px;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  margin: 0;
`;
