import React from "react";
import axios from "axios";
import './forgetpassword.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.svg";

function ForgetPassword() {
  const { register, handleSubmit, formState: { errors },} = useForm({});
  const navigate = useNavigate();

  const submitDetails = (data) => {
    axios.post("https://jsonplaceholder.typicode.com/users", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTimeout(() => navigate("/register.email"), 2000);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.response.status == 400) {
          console.log("Account not found");
        }
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="forget-container">
      <div className="forget-logo">
        <Link to="/" className="forget-logo">
          <img src={logo} id="forget-logo" color="white" />
        </Link>
      </div>
      <div className="forget-wrap">
        <h1 className="forget-heading">Forget Password</h1>
        <p className="forget-p">Enter your email on the box below. A link to reset password will be sent to your email</p>
        <form onSubmit={handleSubmit(submitDetails)} className="forget-form">
          <input className="forget-input"
            placeholder="Enter Your Email Address"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          <button className="forget-btn" type="submit">
            Reset My Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
