import React from "react";
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import Whitepaper from "../components/Whitepaper";
import "../assets/css/Home.css";
function Home(props) {
  // console.log(props.formData);
  return (
    <div className="Home">
      <Hero />
      <CardContainer formData={props.formData}/>
      <Whitepaper />
    </div>
  );
}

export default Home;