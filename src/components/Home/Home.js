import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Pricing from "../Pricing/Pricing";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
    </div>
  );
};

export default Home;
