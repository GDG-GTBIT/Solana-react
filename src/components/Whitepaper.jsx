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
          <div className="aboutDescText">Malayan tigers are found in the subtropical jungles of peninsular Malaysia. Although they are acknowledged as the national animal of Malaysia, their numbers have dropped drastically over time to the point where they are now extinct. As of the year 2022, only 150 of the species are left, which is precisely why GDSC GTBIT chose to engage on this project.
You can buy NFTs that we have created to serve as your underlying assets. They are a type of digital collectible that can be bought, sold, or traded, and their value will only rise over time. A portion of the revenue will be given to the charity.
 </div>
        </div>
      </div>
    </div>
  );
}

export default Whitepaper;