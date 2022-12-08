import Sidebar from "../sideBar/Sidebar";
import "./profile.css";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaTwitter,
  FaUserEdit,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Api from '../api/Api'

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("ABIODUN, Adesina");
  const [location, setLocation] = useState("Lagos,Nigeria");

  useEffect(() => {
    Api.get("/profile")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [profile]);

  return (
    <section>
      <Sidebar>
        <div className="profile-wrap">
          <nav className="Edit-navbar">
            <h3 className="Edit-Profile-text">User Profile</h3>
            <div className="profile-notification">
              <Link to="/edit">
                <FaUserEdit className="profile-icon" />
              </Link>
              <div className="bars">
                <Link to="/" className="nav-logo">
                  <img src={Logo} className="Sidebar-logo" color="white" />
                </Link>
              </div>
            </div>
          </nav>
          <div className="profile-page">
            <p>{error}</p>
            <div className="profile-name">
              <div>
                <h1>{profile?.firstName}</h1>
              </div>
              <br />
              <div>
                <h3>{profile?.occupation}</h3>
              </div>
              <br />
              <div>
                <small>{profile?.gender}</small>
              </div>{" "}
              <br />
              <div className="user-location">
                <p>{profile.location}</p>
              </div>
              <div className="social-icons">
                <Link to={profile.instagramLink} className="user-icons">
                  <div>
                    <FaInstagram />
                  </div>
                </Link>
                <Link to={profile.twitterLink} className="user-icons">
                  <div>
                    <FaTwitter />
                  </div>
                </Link>
                <Link to={profile.facebookLink} className="user-icons">
                  <div>
                    <FaFacebook />
                  </div>
                </Link>
                <Link to={profile.whatsappLink} className="user-icons">
                  <div>
                    <FaWhatsapp />
                  </div>
                </Link>
                <Link to={profile.email} className="user-icons">
                  <div>
                    <FaMailBulk />
                  </div>
                </Link>
              </div>
            </div>
            <div className="profile-pic">{profile.image}</div>
          </div>

          <div className="Profile-EduSec">
            <div className="Profile-EduInfo">
              <h5 style={{ textDecoration: "underline" }}>Education:</h5>
              <div className="edu-details">
                <p>Topmax City College, Ogba, Lagos.</p>
                <p>{profile.schoolAttended}</p>
                <p>{profile.courseOfStudy}</p>
                <small>{profile.yearOfStudy}</small>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </section>
  );
};

export default Profile;
