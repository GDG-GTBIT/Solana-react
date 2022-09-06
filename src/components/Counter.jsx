import CountUp from "react-countup";
import "../assets/css/Counter.css";
import React from "react";

export default function Counter() {
  return (
    <div>
      <div className="CounterHeroContainer">
        <div className="CounterHeroTextContainer">
          <div className = "CounterHeroText1">Collections</div>
          <div className="CounterHeroText2"><CountUp end={450} duration={2} />K+</div>
        </div>
        <div className="CounterHeroTextContainer">
          <div className = "CounterHeroText1">Artist</div>
          <div className="CounterHeroText2"><CountUp end={320} duration={2} />K+</div>
        </div>
        <div className="CounterHeroTextContainer">
          <div className = "CounterHeroText1">Community</div>
          <div className="CounterHeroText2"><CountUp end={16} duration={2} />K+</div>
        </div>
      </div>
   
    </div>
  );
}