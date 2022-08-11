import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="form-layout">
      <div className="form-container">
        <p className="sign-in-text">Sign in with</p>
        <div className="social-login">
          <Link to="/">
            <i>
              <FaFacebook className="icon" size={20} />
            </i>
          </Link>
          <Link to="/">
            <i>
              <FaTwitter className="icon" size={20} />
            </i>
          </Link>
          <Link to="/">
            <i>
              <FaGithub className="icon" size={20} />
            </i>
          </Link>
        </div>
        <div className="divider">
          <p>
            <span>Or</span>
          </p>
        </div>
        <form action="">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button id="bttn" type="submit" style={{ cursor: "pointer" }} required>
            Create your account
          </button>
        </form>
      </div>
      <div className="form-footer">
        <p>
          By signing up, you agree to our{" "}
          <span className="primary-color">Terms, Data Policy</span> and{" "}
          <span className="primary-color">Cookies Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
