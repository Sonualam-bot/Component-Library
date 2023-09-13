import { CardContainer, CardHeader, CardIcon, CardPrice, Typography, CardButton, HorizontalContainer, VerticalContainer, VIcon } from "./Card.Style";


export const Card = ({ children }) => {
    return <CardContainer>{children}</CardContainer>;
};


export { CardHeader, CardIcon, CardPrice, Typography, CardButton, HorizontalContainer, VerticalContainer, VIcon }