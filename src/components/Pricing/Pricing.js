import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <div className="top-content">
          <div>
            <h2>
              Everything you need for <span>$99 a month</span>
            </h2>
            <p>
              Includes every feature we offer pluse unlimted projects and
              unlimited users.
            </p>
          </div>
          <div className="bttn-div">
            <button>Get Started Today</button>
          </div>
        </div>
        <div className="bottom-content">
          <div className="card">
            <p>
              <span>Everything you need</span>
            </p>
            <h3>All-in-one platform</h3>
            <p>
              Voluptua sit ut clita nonumy accusam et. Et takimata vero at
              labore. Lorem ut diam amet dolor vero diam aliquyam sea erat, sit
              voluptua lorem duo magna, gubergren sea rebum.
            </p>
          </div>
          <div className="card">
            <div>
              <p>Et dolor est ea et eos.</p>
            </div>
            <div>
              <p>Et dolor et kasd ipsum eos.</p>
            </div>
            <div>
              <p>Ipsum duo takimata no dolores sanctus.</p>
            </div>
            <div>
              <p>Sanctus sadipscing amet lorem magna dolore.</p>
            </div>
            <div>
              <p>Sit invidunt no no lorem magna.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>Et dolor est ea et eos.</p>
            </div>
            <div>
              <p>Et dolor et kasd ipsum eos.</p>
            </div>
            <div>
              <p>Ipsum duo takimata no dolores sanctus.</p>
            </div>
            <div>
              <p>Sanctus sadipscing amet lorem magna dolore.</p>
            </div>
            <div>
              <p>Sit invidunt no no lorem magna.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
