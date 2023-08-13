import React, { useState } from "react";
import "../style/register.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [error, SetError] = useState(false);

  const navigate = useNavigate();

  // function to retrieve the user details
  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      SetError(true);
    } else {
      SetError(false);
      // object for the details
      const details = {
        Username: username,
        Password: password,
      };
      localStorage.setItem("details", JSON.stringify(details));
      toast.success("Registration successful", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
      handleNavigation();
    }
  };
  // navigate after 2 seconds
  const handleNavigation = () => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  
  return (
    <div className="d-flex align-items-center justify-content-center">
      <lottie-player
        src="https://lottie.host/8ae6c2ac-0450-4c46-8bed-015f1555def4/QprSyqSr7v.json"
        background="#fff"
        speed="1"
        style={{ width: "35rem" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>

      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign up to create an account</p>
        <div className="input-container">
          <input
            placeholder="Enter email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <div className="input-container">
          <input
            placeholder="Enter username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="input-container">
          <input
            placeholder="confirm password"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirm(e.target.value)}
          />
          {error && (
            <div style={{ color: "red" }} className="funda">
              <h6>password doesn't match</h6>
            </div>
          )}
        </div>
        <button className="submit btn btn-primary" type="submit">
          Sign up
        </button>
        <p className="signup-link">
          Already have an account?
          <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
