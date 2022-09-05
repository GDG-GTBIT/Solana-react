import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Whitepaper from "../components/Whitepaper";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whitepaper />
      <Footer />
    </div>
  );
}

export default Home;
