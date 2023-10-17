import { NavLink } from "react-router-dom";
import "./Components.css";

//icons
// import { FaUserSecret } from "react-icons/fa";
// import { GoAlert } from "react-icons/go";
// import { BiBadgeCheck } from "react-icons/bi";
// import { CgPlayButtonR } from "react-icons/cg";
// import { BsCardImage } from "react-icons/bs";
// import { AiOutlineSetting } from "react-icons/ai";

// import { TbNavigationCode } from "react-icons/tb";

export const Component = () => {
  return (
    <>
      <div className="componentParent">
        <div className="componentContainer">
          <NavLink className="navlink" to="/avatar">
            {/* <FaUserSecret /> */}
            Avatar
          </NavLink>
          <NavLink className="navlink" to="/alert">
            {/* <GoAlert /> */}
            Alert
          </NavLink>
          <NavLink className="navlink" to="/badge">
            {/* <BiBadgeCheck /> */}
            Badge
          </NavLink>
          <NavLink className="navlink" to="/button">
            {/* <CgPlayButtonR /> */}
            Button
          </NavLink>
          <NavLink className="navlink" to="/card">
            {/* <BsCardImage /> */}
            Card
          </NavLink>
          <NavLink className="navlink" to="/images">
            {/* <BsCardImage /> */}
            Image
          </NavLink>

          {/* <NavLink className="" to="/text">
            Text
          </NavLink> */}
          <NavLink className="navlink" to="/utility">
            {/* <AiOutlineSetting /> */}
            Utility
          </NavLink>
          <NavLink className="navlink" to="/navigation">
            {/* <TbNavigationCode /> */}
            Navigation
          </NavLink>
        </div>
      </div>
    </>
  );
};
