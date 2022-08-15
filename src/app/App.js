import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import ContactPage from "../pages/ContactPage";
import FaqPage from "../pages/FaqPage";
import PricingPage from "../pages/PricingPage";

function App() {
  const [formActive, setFormActive] = useState("");
  const [menuOn, setMenuOn] = useState(false);

  const handleForm = () => {
    if (formActive !== "active") {
      setFormActive("active");
    } else {
      setFormActive("");
    }
  };

  const handleMenu = () => {
    setMenuOn(!menuOn);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleForm={handleForm}
              handleMenu={handleMenu}
              menuOn={menuOn}
              formActive={formActive}
            />
          }
        />
        <Route
          path="/pricing"
          element={<PricingPage handleMenu={handleMenu} menuOn={menuOn} />}
        />
        <Route
          path="/faq"
          element={<FaqPage handleMenu={handleMenu} menuOn={menuOn} />}
        />
        <Route
          path="/contact"
          element={<ContactPage handleMenu={handleMenu} menuOn={menuOn} />}
        />
      </Routes>
    </>
  );
}

export default App;
