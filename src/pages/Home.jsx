
import React from "react";
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import Whitepaper from "../components/Whitepaper";
import "../assets/css/Home.css";
function Home() {
  return (
    <div className="Home">
      <Hero />
      <CardContainer />
      <Whitepaper />
    </div>
  );
}

export default Home;