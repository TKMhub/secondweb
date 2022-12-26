import React from "react";
import IMG_TKM from "../images/TKM.png";
import "../style/topbar.min.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <header className={"Topbar"}>
        <Link to="/">
          <img
            src={IMG_TKM}
            alt="TKMLOGO"
            width={"120px"}
            height={"auto"}
            className={"Topbar-TKM"}
          />
        <h1>design...</h1>
        </Link>
        <ul>
          <li className="menu-li">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-li">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="menu-li">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="menu-li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Topbar;
