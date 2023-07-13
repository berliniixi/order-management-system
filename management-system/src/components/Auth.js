import React, { useState } from "react";
import classes from "./Auth.module.css";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLock, AiFillEye } from "react-icons/ai";

function Auth(props) {
  const [toggleForm, setToggleForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleFormHandler = () => {
    setToggleForm((prevState) => !prevState);
  };

  const passwordToggleHandler = (event) => {
    event.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={classes["form-process"]}>
      <div className={classes.welcome}>
        <div className={classes.logo}>
          <img src={props.logo} alt="logo" />
        </div>
        <div className={classes.title}>
          <h1>Welcome</h1>
        </div>
        <div className={classes["info-message"]}>
          <p>To keep connected with us please login with your personal info</p>
        </div>
        <div className={classes["sign-in"]}>
          <button onClick={toggleFormHandler}>
            {toggleForm ? "SIGN-IN" : "SIGN-UP"}
          </button>
        </div>
      </div>
      <div className={classes.process}>
        <div className={classes.title}>
          <h1>{toggleForm ? "Create Account" : "Log In"}</h1>
        </div>
        <div className={classes.icons}>
          <button>
            <span>
              <FaLinkedinIn size={30} color="rgba(250, 141, 53, 0.884)" />
            </span>
          </button>
          <button>
            <span>
              <RiInstagramFill size={30} color="rgba(250, 141, 53, 0.884)" />
            </span>
          </button>
          <button>
            <span>
              <BsTwitter size={30} color="rgba(250, 141, 53, 0.884)" />
            </span>
          </button>
        </div>
        <div className={classes["info-message"]}>
          <p>or use your email for registration</p>
        </div>
        <form>
          <div className={classes["sign-up-form"]}>
            {toggleForm && (
              <span>
                <FaUserAlt />
                <input type="text" placeholder="Company Name" />
              </span>
            )}
            <span>
              <MdEmail />
              <input type="email" placeholder="Company Email" required />
            </span>
            <span>
              <AiFillLock />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Company Password"
                required
              />
              <button
                className={classes["show-password-toggle"]}
                onClick={passwordToggleHandler}
              >
                <AiFillEye />
              </button>
            </span>
          </div>
          <div className={classes["sign-up-action"]}>
            <button onClick={props.onClick}>
              {toggleForm ? "SIGN-UP" : "SIGN-IN"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
