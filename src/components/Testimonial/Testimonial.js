import React from "react";
import { FaDatabase } from "react-icons/fa";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase /> Staxx
            </i>
            <p className="body">
              Takimata vero lorem duo et eos accusam rebum, ea voluptua rebum
              lorem erat dolore duo. Rebum sit magna takimata est. Magna ipsum
              erat nonumy nonumy justo. Amet lorem no amet.
            </p>
            <div className="name">
              <p>Marie Chilvers</p>
              <p>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
