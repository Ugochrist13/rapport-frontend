import "./signup.css";
import Api from '../api/Api'
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submitDetails = (data) => {
    Api.post( '/signup',data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        const user_id = response.data.userId;
        const userid = JSON.stringify(user_id)
        localStorage.setItem("user_id", userid);

        setTimeout(() => navigate("/verify-email"), 2000);
      })
      .catch((error) => {
        console.log(error.message);
        //   console.log("Account not found");
        // }
        // console.log(error.response.data.message);
      });
  };

  return (
    <div className="signup-section">
      <div className="signup-logo">
        <Link to="/" className="signup-logo">
          <img src={logo} id="signup-logo" color="white" />
        </Link>
      </div>
      <div className="signup-container">
        <div className="signup-wrap">
          <div className="signup-title">
            <h1 className="signup-heading">
              Join <span id="signup-heading">RAPPORT</span>
            </h1>
            <p className="signup-p">keeping old ties together...</p>
          </div>
          <form onSubmit={handleSubmit(submitDetails)} className="signup-form">
            <label className="signup-label">First Name</label>
            <input
              className="signup-name signup-input"
              type="text"
              {...register("firstname", {
                required: true,
              })}
            />
            <p className="signup-error-text">
              {errors.firstname?.type === "required" && "Your name is required"}
            </p>
            <label className="signup-label">Last Name</label>
            <input
              type="text"
              className="signup-name signup-input"
              {...register("lastname", {
                required: true,
              })}
            />
            <p className="signup-error-text">
              {errors.lastname?.type === "required" && "Your name is required"}
            </p>
            <label className="signup-label">Email</label>
            <input
              type="email"
              id="signup-email"
              className="signup-input"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <p className="signup-error-text">
              {errors.email?.type === "required" &&
                "Please enter an email address"}
            </p>
            <p className="signup-error-text">
              {errors.email?.type === "pattern" &&
                "Your email address is not valid"}
            </p>
            <label className="signup-label">Password</label>
            <input
              type="password"
              className="signup-password signup-input"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            <p className="signup-error-text">
              {errors.password?.type === "required" &&
                "Please enter a password"}
            </p>
            <p className="signup-error-text">
              {errors.password?.type === "pattern" &&
                "Password must contain letters,Uppercase, Numbers, special character and should not be less than 6 and more than 15 characters"}
            </p>
            <label className="signup-label">Confirm Password</label>
            <input
              className="signup-password signup-input"
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
            <p className="signup-error-text">
              {errors.confirmPassword?.type === "validate" &&
                "Password does not match"}
            </p>

            <br />
            <button type="submit" id="signup-btn">
              Submit
            </button>
          </form>

          <div className="signup-login-link">
            <p>Already have an account?</p>
            <NavLink to="/login" id="signup-login-link">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
