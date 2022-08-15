import React from "react";
import Faq from "../components/FAQ/Faq";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const FaqPage = ({ handleMenu, menuOn }) => {
  return (
    <>
      <Navbar handleMenu={handleMenu} menuOn={menuOn} />
      <Faq />
      <Footer />
    </>
  );
};

export default FaqPage;
