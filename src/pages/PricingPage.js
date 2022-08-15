import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";

const PricingPage = ({ handleMenu, menuOn }) => {
  return (
    <>
      <Navbar handleMenu={handleMenu} menuOn={menuOn} />
      <Pricing />
      <Footer />
    </>
  );
};

export default PricingPage;
