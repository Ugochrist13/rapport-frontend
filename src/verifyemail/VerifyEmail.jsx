import React from "react";
import "./verifyemail.css";
import Api from '../api/Api'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.svg";

function VerifyEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const navigate = useNavigate();

  const id = JSON.parse(localStorage.getItem("user_id"));
  const submitDetails = (data) => {
    Api.post("/verify-email/" + id, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setTimeout(() => navigate("/login"), 2000);
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
    <div className="verify-container">
      <div className="verify-logo">
        <Link to="/" className="verify-logo">
          <img src={logo} id="verify-logo" color="white" />
        </Link>
      </div>
      <div className="verify-wrap">
        <h1 className="verify-heading">Verify Password</h1>
        <p className="verify-p">
          A token has been sent to your email. Input your token to verify your
          email account
        </p>
        <form onSubmit={handleSubmit(submitDetails)} className="verify-form">
          <input
            className="verify-input"
            placeholder="Enter Your Token"
            type="text"
            maxLength="5"
            {...register("verificationToken", {
              required: true,
            })}
          />
          <p className="signup-error-text">
            {errors.number?.type === "" && "The token is 5-digit"}
          </p>
          <button className="verify-btn" type="submit">
            Verify Your Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
