import React from "react";
import "../assets/css/Whitepaper.css";
import tiger_img from "../assets/images/Tiger_1_img.png";
function Whitepaper() {
  return (
    <div className="WhitePaper">
      <div className="aboutContainer">
        <div className="aboutContainerHead">ABOUT THE PROJECT</div>
        <div className="aboutDescContainer">
          <div className="aboutDescImgContainer">
            <img className="aboutDescImg" src={tiger_img} alt="tiger icon" />
          </div>
          <div className="aboutDescText">This project has been developed to raise awareness  about the decrease in the number of Malaysian tigers.</div>
        </div>
      </div>
    </div>
  );
}

export default Whitepaper;