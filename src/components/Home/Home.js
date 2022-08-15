import React from "react";
import Contact from "../Contact/Contact";
import Faq from "../FAQ/Faq";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = ({ menuOn, handleForm, handleMenu, formActive }) => {
  return (
    <div>
      <Navbar menuOn={menuOn} handleMenu={handleMenu} />
      <Hero handleClick={handleForm} active={formActive} />
      <Pricing />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
