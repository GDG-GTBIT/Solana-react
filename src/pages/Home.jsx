import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Whitepaper from "../components/Whitepaper";
import Footer from "../components/Footer";
import  "../assets/css/Home.css";
function Home() {
  return (
    <div className="Home">
      <Navbar />
      {/* <Hero /> */}
      <Whitepaper />
      <Footer />
    </div>
  );
}

export default Home;
