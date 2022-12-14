import React from "react";
import "./Hero.css";
import { FaDatabase, FaAsterisk, FaAccusoft } from "react-icons/fa";
import SignInForm from "../Form/SignInForm";

const Hero = ({ handleClick, active }) => {

  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">online buisness</span>
            </h1>
            <p>
              Labore ipsum dolore vero et est aliquyam et. Sadipscing diam at
              dolor sed vero ipsum at. Labore elitr vero invidunt.
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <i>
                  <FaDatabase /> Staxx
                </i>
                <i>
                  <FaAsterisk /> Star AI
                </i>
                <i>
                  <FaAccusoft /> Accusoft
                </i>
              </div>
            </div>
          </div>
          <div className={`col-2 ${active}`}>
            <SignInForm />
          </div>
          <button className={`login-bttn ${active}`} onClick={handleClick}>
            {active !== "active" ? " Sign up/Login" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
