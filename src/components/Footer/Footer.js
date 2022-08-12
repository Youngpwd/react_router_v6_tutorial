import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col solutions">
          <h6>Solutions</h6>
          <ul>
            <li>
              <Link to="/"></Link>Marketing
            </li>
            <li>
              <Link to="/"></Link>Analytics
            </li>
            <li>
              <Link to="/"></Link>Commerce
            </li>
            <li>
              <Link to="/"></Link>Insights
            </li>
          </ul>
        </div>
        <div className="col support">
          <h6>support</h6>
          <ul>
            <li>
              <Link to="/"></Link>Pricing
            </li>
            <li>
              <Link to="/"></Link>Documentation
            </li>
            <li>
              <Link to="/"></Link>Guides
            </li>
            <li>
              <Link to="/"></Link>API Status
            </li>
          </ul>
        </div>
        <div className="col company">
          <h6>company</h6>
          <ul>
            <li>
              <Link to="/"></Link>About
            </li>
            <li>
              <Link to="/"></Link>Blog
            </li>
            <li>
              <Link to="/"></Link>Jobs
            </li>
            <li>
              <Link to="/"></Link>Press
            </li>
          </ul>
        </div>
        <div className="col legal">
          <h6>Legal</h6>
          <ul>
            <li>
              <Link to="/"></Link>Claim
            </li>
            <li>
              <Link to="/"></Link>Privacy
            </li>
            <li>
              <Link to="/"></Link>Cookies
            </li>
            <li>
              <Link to="/"></Link>Terms
            </li>
          </ul>
        </div>
        <div className="col-subscribe">
          <h6>Subscribe to out newletter</h6>
          <p>
            The latest news, articles, and resources sent to your inbox weekly.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email " />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="content">
          <div className="rights">
            <p>&copy; Workflow, Inc. All rights reserved.</p>
          </div>
          <div>
            <FaFacebook
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaInstagram
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
