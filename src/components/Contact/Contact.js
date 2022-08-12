import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h2>Get in touch</h2>
              <p className="contact-info">
                Dolor et tempor diam diam dolor, gubergren sea labore erat ut
                kasd, dolores sadipscing sit lorem dolores voluptua dolore sit.
              </p>
            </div>
            <div className="address">
              <p>2045 Magna Amet</p>
              <p>Naboo, GE 12451</p>
            </div>
            <div className="icons">
              <FaPhone style={{ marginRight: "1rem" }} />
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="icons">
              <FaEnvelope style={{ marginRight: "1rem" }} />
              <p>support@example.com</p>
            </div>
            <div className="careers">
              <p>
                Looking for careers <span>View all job openings.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email" required />
            <input type="phone" placeholder="Phone" required />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="10"
              required
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                By checking this box, you agree to the{" "}
                <span>Privacy Policy</span> and <span>Cookie Policy</span>
              </p>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
