import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const ContactPage = ({ handleMenu, menuOn }) => {
  return (
    <>
      <Navbar handleMenu={handleMenu} menuOn={menuOn} />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
