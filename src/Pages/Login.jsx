import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const detail = JSON.parse(localStorage.getItem("details"));
  const navigate = useNavigate();

  //function to handle login
  const handleSubmit = (e) => {
    e.preventDefault();
  if (!detail) {
    toast.error("User not found. Please sign up.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  } else
    if (name !== detail.Username || password !== detail.Password) {
      toast.error("Invalid Credentials !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
     } else {
      toast.success("Login Successful", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
      dispatch({ type: "LOGIN" });
      localStorage.setItem("name", name);
      
      localStorage.setItem("isLoggedIn", "true");
      handleNavigation();
    }
  };

// function to set timeout
  const handleNavigation = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  
  return (
    <div className="d-flex align-items-center justify-content-center lotties">
      <lottie-player
        src="https://lottie.host/c455871b-372f-4387-9373-3997c51486ef/BZJWGcyiwl.json"
        background="#fff"
        speed="1"
        style={{ width: "30rem" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>

      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input
            placeholder="Enter username"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            placeholder="Enter password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit btn btn-primary" type="submit">
          Sign in
        </button>

        <p className="signup-link">
          Don't have an account?
          <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
