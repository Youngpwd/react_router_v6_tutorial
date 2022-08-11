import React from "react";
import Faq from "../FAQ/Faq";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
