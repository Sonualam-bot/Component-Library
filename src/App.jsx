import { Header } from "./pages/component/Header";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home/Home";
import { AvatarDoc } from "./documentation/AvatarDoc";
import { AlertDoc } from "./documentation/AlertDoc";
import { BadgeDoc } from "./documentation/BadgeDoc";
import { ButtonDoc } from "./documentation/ButtonDoc";
import { CardDoc } from "./documentation/CardDoc";
import { Introduction } from "./documentation/Introduction";
import { NavigationDoc } from "./documentation/NavigationDoc";
import { UtilityDoc } from "./documentation/UtilityDoc";

//icons
import { FaUserSecret } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { BiBadgeCheck } from "react-icons/bi";
import { CgPlayButtonR } from "react-icons/cg";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { TbNavigationCode } from "react-icons/tb";
import { Component } from "./pages/component/Component";

export default function App() {
  const location = useLocation();
  const showSideBar =
    location.pathname !== "/" && location.pathname !== "/comp";

  return (
    <div className="App">
      <Header />
      <div className="parent-container">
        {showSideBar && (
          <div className="links-container">
            {/* <h3>Getting Started</h3> */}
            <NavLink className="navigation-navlink intro" to="/introduction">
              Introduction
            </NavLink>
            <NavLink className="navigation-navlink" to="/avatar">
              <FaUserSecret />
              Avatar
            </NavLink>
            <NavLink className="navigation-navlink" to="/alert">
              <GoAlert />
              Alert
            </NavLink>
            <NavLink className="navigation-navlink" to="/badge">
              <BiBadgeCheck />
              Badge
            </NavLink>
            <NavLink className="navigation-navlink" to="/button">
              <CgPlayButtonR />
              Button
            </NavLink>
            <NavLink className="navigation-navlink" to="/card">
              <BsCardImage />
              Card
            </NavLink>
            <NavLink className="navigation-navlink" to="/utility">
              <AiOutlineSetting />
              Utility
            </NavLink>
            <NavLink className="navigation-navlink" to="/navigation">
              <TbNavigationCode />
              Navigation
            </NavLink>
          </div>
        )}

        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/alert" element={<AlertDoc />} />
            <Route path="/avatar" element={<AvatarDoc />} />
            <Route path="/badge" element={<BadgeDoc />} />
            <Route path="/button" element={<ButtonDoc />} />
            <Route path="/card" element={<CardDoc />} />
            {/* <Route path="/heading" element={<HeadingDoc />} /> */}
            <Route path="/navigation" element={<NavigationDoc />} />
            <Route path="/utility" element={<UtilityDoc />} />
            <Route path="/comp" element={<Component />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
