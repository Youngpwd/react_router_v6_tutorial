import React, { useState } from "react";
import Faq from "../FAQ/Faq";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  const [formActive, setFormActive] = useState("");
  const handleForm = () => {
    if (formActive !== "active") {
      setFormActive("active");
    } else {
      setFormActive("");
    }
  };

  return (
    <div>
      <Navbar />
      <Hero handleClick={handleForm} active={formActive} />
      <Pricing />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
