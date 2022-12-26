import React from "react";
import "../style/home.min.css";

import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <Link to="/contact">
        <div className="button-style">
          <div className="ui animated button" tabIndex="0">
            <div className="visible content">Contact</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Button;
