import { useState } from "react";
import { Box, IconContainer, IconItem, BottomNavigation } from "./Navigation.Style"


function SingleIcon({ icon }) {
    return (
        <IconContainer>
            {icon && <div className="icon">{icon}</div>}
            {/* <p>Icon Label</p> */}
        </IconContainer>
    );
}
export const BottomIcon = ({ icon, variant, activeVariant, setActiveVariant }) => {


    const handleClick = (selectedVariant) => {
        if (activeVariant === selectedVariant) {
            setActiveVariant(null);
        } else {
            setActiveVariant(selectedVariant);
        }
    };

    return (
        <IconContainer onClick={() => handleClick(variant)}>
            {icon && <div className={`icon ${activeVariant === variant ? 'active' : ''}`}>{icon}</div>}
            {activeVariant === variant && <p>{variant}</p>}
        </IconContainer>
    );
}

export { Box, IconContainer, IconItem, BottomNavigation }
export default SingleIcon;
