import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useForm } from "react-hook-form";
import Api from '../api/Api'
import { useState } from "react";

const LoginPage = () => {

  const navigate = useNavigate();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [access, setAccess] = useState('')

  const submitDetails = (data) => {
      Api.post('/login', data)
      .then((result) =>{
        setAccess(() =>{
          return {
            token: result.data.data,
            isLoggedIn: true,
            userID: result.data.authorID
          }
        })
        navigate('/profile')
      })

      
  };


  return (
    <div className="login-container">
        <div className="login-logo">
        <Link to="/" className="login-logo">
          <img src={logo} id="login-logo" color="white" />
        </Link>
        </div>
      <div className="login-form">
          <h2 className="login-title">RAPPORT</h2>
          <p className="login-p">keeping old ties together...</p>
          <br />
          <form className="login-form-table" onSubmit={handleSubmit(submitDetails)}>
            <label className="login-label" htmlFor="">
              Email:
            </label>
            <br />
            <input
              className="login-input"
              type="text"
            />
            <br />
            <br />
            <label className="login-label" htmlFor="">
              Password:
            </label>
            <br />
            <input
              className="login-input"
              type="password"
            />
            <p className="login-forget">
            Forgot Password?{" "}
            <Link id="login-forget" to="/forgetpassword">
              Click Here{" "}
            </Link>
          </p>
            <br />
            <Link className="login-btn">
              <button type="submit" id="login-btn">
                Login
              </button>
            </Link>
          </form>
          <p className="login-newuser">
            New User?{" "}
            <Link id="login-newuser" to="/signup">
              Create Account{" "}
            </Link>
          </p>
      </div>
    </div>
  );
};

export default LoginPage;
