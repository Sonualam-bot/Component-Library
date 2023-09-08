import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div className="header-container">
                <h3>Renon Css Library</h3>
                <input placeholder="Search components here" className="search" />
                <div className="right-header">
                    <NavLink to="/" className="navlink">
                        Home
                    </NavLink>
                    <NavLink className="navlink">Components</NavLink>
                </div>
            </div>
        </>
    );
};
