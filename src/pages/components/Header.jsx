import { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";





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
        "image",
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
                <h3>Renon Css Library</h3>
                <div>
                    <input placeholder="Search components here" className="search" value={search} onChange={handleSearch} />
                    <div className="suggestionContainer">
                        {
                            suggestions?.map((suggestion) => {
                                return (
                                    <div onClick={() => handleSearchClick(suggestion)} key={suggestion} className="suggestionComp"  >
                                        {suggestion}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

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
