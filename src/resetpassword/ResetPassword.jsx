import React from "react";
import axios from "axios";
import './resetpassword.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.svg";

function ResetPassword() {
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
    <div className="reset-container">
      <div className="reset-logo">
        <Link to="/" className="reset-logo">
          <img src={logo} id="reset-logo" color="white" />
        </Link>
      </div>
      <div className="reset-wrap">
        <h1 className="reset-heading">Reset Password</h1>
        <form onSubmit={handleSubmit(submitDetails)} className="reset-form">
        <label className="reset-label">Password</label>
            <input
              type="password"
              className="reset-password reset-input"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            <p className="reset-error-text">
              {errors.password?.type === "required" &&
                "Please enter a password"}
            </p>
            <p className="reset-error-text">
              {errors.password?.type === "pattern" &&
                "Password must contain letters,Uppercase, Numbers, special character and should not be less than 6 and more than 15 characters"}
            </p>
            <label className="reset-label">Confirm Password</label>
            <input
              className="reset-password reset-input"
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                  if (watch("password") != value) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            <p className="reset-error-text">
              {errors.confirmPassword?.type === "validate" &&
                "Password does not match"}
            </p>
          <button className="reset-btn" type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
