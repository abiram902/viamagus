import React, { useEffect, useState } from "react";
import tree from "../assets/Rectangle 1.png";
import amazon from "../assets/amazon.png";
import banyan from "../assets/Rectangle 4.png";
import "./Login.css";
import gm from "../assets/Group 9.png";
import fb from "../assets/Rectangle 17.png";
import svg from "../assets/Group 2.svg";

function Login() {
  const [state, setState] = useState({
    email: "",
    emailErr: false,
    passWord: "",
    passwordErr: false,
  });
  const [isToched, setIsTouched] = useState({ email: false, passWord: false });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsTouched((prev) => ({ ...prev, [name]: true }));
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (state.email.length < 1) {
      setState((prevErr) => ({ ...prevErr, emailErr: true }));
    } else {
      setState((prevErr) => ({ ...prevErr, emailErr: false }));
    }
    if (state.passWord.length < 5) {
      setState((prevErr) => ({ ...prevErr, passwordErr: true }));
    } else {
      setState((prevErr) => ({ ...prevErr, passwordErr: false }));
    }
  };

  const emailErrMessage = (
    <div className="errMsg">
      <img src={svg} alt="svg" className="svg" />
      <p className="pink-text"> email is required</p>
    </div>
  );

  const passwordErrMessage = (
    <div className="errMsg">
      <img src={svg} alt="svg" className="svg" />
      <p className="pink-text"> password is too short</p>
    </div>
  );
  // for form vallidation
  useEffect(() => {
    const time = setTimeout(validateForm(), 2000);
    console.log("ko");
    return () => {
      clearTimeout(time);
    };
  }, [state.email, state.passWord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.passwordErr && !state.emailErr) {
      //submit form
    } else {
      return;
    }
  };

  return (
    <div className="login">
      <img src={tree} alt="tree-bg" className="bg-img" />
      <div className="login__form">
        <div className="login__form__banner">
          <img src={amazon} alt="amazon logo" />
        </div>
        <form>
          <h2>Login</h2>
          <img src={banyan} alt="banyan" width={385} height={128} />
          <label htmlFor="email">
            Email
            <input
              type="email"
              value={state.email}
              name="email"
              id="email"
              onChange={handleChange}
            />
          </label>
          {state.emailErr && isToched.email ? emailErrMessage : null}
          <label htmlFor="password">
            password
            <input
              type="password"
              onChange={handleChange}
              value={state.passWord}
              name="passWord"
              id="password"
            />
          </label>
          {state.passwordErr && isToched.passWord ? passwordErrMessage : null}
          <input
            type="submit"
            value="sign in"
            className="submit"
            onClick={handleSubmit}
          />
          <p className="login__form__options">
            <span className="small-text">Forgot Password?</span>{" "}
            <span className="small-text pink-text">New User? Sign Up</span>
          </p>
          <p className="login__form__or">or</p>
          <button className="btn__blue" onClick={(e) => e.preventDefault()}>
            <img src={gm} alt="gm" />
            continue with gmail
          </button>
          <button className="btn__blue" onClick={(e) => e.preventDefault()}>
            <img src={fb} alt="fb" />
            continue with facebook
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
