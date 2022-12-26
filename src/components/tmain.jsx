import React from "react";
import IMGGGG from "../images/ggg.jpeg";
import "../style/tmain.min.css";

const Tmain = (props) => {
  return (
    <div>
      <main className={"Tmain"}>
        <img
          src={IMGGGG}
          alt="TKMLOGO"
          width={"300px"}
          height={"auto"}
          className={"GGG-img"}
        />
        <h1>{props.main}</h1>
      </main>
    </div>
  );
};

export default Tmain;
