import { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";


import { AiFillGithub } from "react-icons/ai"



export const Header = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([])
    const navigate = useNavigate();

    const searchQuery = [
        "avatar",
        "alert",
        "badge",
        "button",
        "card",
        "navigation",
        "text",
        "heading"
    ]

    const handleSearch = (e) => {
        setSearch(e.target.value)

        if (e.target.value.trim() === "") {
            setSuggestions([])
        } else {
            const filterComponents = searchQuery.filter((query) => query.toLowerCase().startsWith(search.toLowerCase()))

            setSuggestions(filterComponents)
        }

    }


    const handleSearchClick = (suggestion) => {
        navigate(`/${suggestion}`)
        setSearch("")
        setSuggestions([])
    }



    return (
        <>
            <div className="header-container">
                <h3 style={{ fontFamily: "cursive" }} >SleekStyles UI</h3>
                <div>
                    <input placeholder="Search components here" className="search" value={search} onChange={handleSearch} />
                    <div className="suggestionContainer">
                        {
                            suggestions?.map((suggestion) => {
                                return (
                                    <div onClick={() => handleSearchClick(suggestion)} key={suggestion} className="suggestionComp"  >
                                        {suggestion}
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="right-header">
                    <NavLink to="/" className="navlinkTEM">
                        Home
                    </NavLink>
                    <NavLink to="/comp" className="navlinkTEM">Components</NavLink>
                    <NavLink to="https://github.com/Sonualam-bot/Component-Library" target="_blank" > <AiFillGithub /></NavLink>

                </div>
            </div>
        </>
    );
};
