import { Header } from "./pages/components/Header";
import { Routes, Route, NavLink } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home/Home";
import { AvatarDoc } from "./documentation/AvatarDoc";
import { AlertDoc } from "./documentation/AlertDoc";
import { BadgeDoc } from "./documentation/BadgeDoc";
import { ButtonDoc } from "./documentation/ButtonDoc";
import { CardDoc } from "./documentation/CardDoc";
import { HeadingDoc } from "./documentation/HeadingDoc";
import { ImageDoc } from "./documentation/ImageDoc";
import { Utility } from "./components/Utility/Utility";
import { Introduction } from "./documentation/Introduction";

//icons
import { FaUserSecret } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { BiBadgeCheck } from "react-icons/bi";
import { CgPlayButtonR } from "react-icons/cg";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { ImImages } from "react-icons/im";


export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="parent-container">
        <div className="links-container">
          <h2>Getting Started</h2>
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

          <NavLink className="navigation-navlink" to="/image">
            <ImImages />
            Image
          </NavLink>
          <NavLink className="navigation-navlink" to="/text">
            Text
          </NavLink>
          <NavLink className="navigation-navlink" to="/heading">
            <AiOutlineSetting />
            Utility
          </NavLink>
        </div>
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/alert" element={<AlertDoc />} />
            <Route path="/avatar" element={<AvatarDoc />} />
            <Route path="/badge" element={<BadgeDoc />} />
            <Route path="/button" element={<ButtonDoc />} />
            <Route path="/card" element={<CardDoc />} />
            <Route path="/heading" element={<HeadingDoc />} />
            <Route path="/image" element={<ImageDoc />} />
            <Route path="/text" element={<Utility />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
