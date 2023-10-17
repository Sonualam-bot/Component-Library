import { NavLink } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <h1>SleekStyles UI</h1>
        <p>In the ever-evolving landscape of web development,</p>
        <p>the need for efficient, scalable, and maintainable CSS </p>
        <p>solutions has never been more critical.</p>
        <p>Say hello to SleekStyles UI, a cutting-edge </p>
        <p>CSS library built on the robust foundation of Styled Components</p>
        <NavLink to="/comp" className="getStarted">
          Get Started
        </NavLink>
      </div>
    </>
  );
};
