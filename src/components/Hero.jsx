import React from "react";
import Counter from "./Counter";
import Carousel from "../components/Carousel";
import "../assets/css/heroHome.css";
function Hero() {
  return (
    <div>
      <div className = "heroContainer">
        <div className = "heroContainerPart1">
          <div className= "heroContainerText">Be one of the first 3 people to buy this <span className = "heroContainerSpan">NFT</span></div>
          <div className = "heroContainerText2">and get a 10$ bonus along with the purchase</div>
          <div className = "heroContainerText3">The price of NFT : <span className="heroContainerTextspan">23 $</span> <i class="bi bi-arrow-right-short"></i> 18 $ </div>
          <button className = "heroContainerButton">Mint Now</button>
          <Counter />
        </div>
        <div className = "heroContainerPart2">
          <Carousel/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
