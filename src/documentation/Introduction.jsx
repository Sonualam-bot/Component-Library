import { NavLink } from "react-router-dom";

import "./Universal.css"

export const Introduction = () => {
    return (
        <>
            <div className="introContainer">
                <h2>
                    Welcome to SleekStyles: Your Modern CSS Library Made Simple with Styled Components
                </h2>
                <div>
                    <p>🚀 Craft beautiful, scalable user interfaces effortlessly.</p>
                    <p>🎨 Customize styles with ease to match your unique project's look and feel.</p>
                    <p>🌐 Ensure a consistent design across your entire web application.</p>
                    <p>💡 Simplify your styling workflow without the complexity of traditional CSS.</p>
                </div>
                <div className="linkContainer">
                    <p>Ready to get started?</p>
                    <NavLink to="/avatar" className="navlink3" >Get Started</NavLink>
                </div>
            </div>
        </>
    );
};
