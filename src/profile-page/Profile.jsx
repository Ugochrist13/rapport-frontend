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
import Api from "../api/Api";

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
            {profile?.map(({ currentLocation, gender, maritalStatus, phoneNumber, secondarySchool, tertiarySchool, facultyDepartment, profession, employmentStatus, yearOfStudy, whatsApp, twitter, linkedIn, faceBook, instagram}) => {
                return (
                  <div>
                    <div className="profile-name">
                      <div>
                        <h1>{firstName}</h1>
                      </div>
                      <br />
                      <div>
                        <h3>{occupation}</h3>
                      </div>
                      <br />
                      <div>
                        <small>{gender}</small>
                      </div>{" "}
                      <br />
                      <div className="user-location">
                        <p>{location}</p>
                      </div>
                      <div className="social-icons">
                        <Link to={instagramLink} className="user-icons">
                          <div>
                            <FaInstagram />
                          </div>
                        </Link>
                        <Link to={twitterLink} className="user-icons">
                          <div>
                            <FaTwitter />
                          </div>
                        </Link>
                        <Link to={facebookLink} className="user-icons">
                          <div>
                            <FaFacebook />
                          </div>
                        </Link>
                        <Link to={whatsappLink} className="user-icons">
                          <div>
                            <FaWhatsapp />
                          </div>
                        </Link>
                        <Link to={email} className="user-icons">
                          <div>
                            <FaMailBulk />
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="profile-pic">{image}</div>
                  </div>
                );
              })}
          </div>

          <div className="Profile-EduSec">
            <div className="Profile-EduInfo">
              <h5 style={{ textDecoration: "underline" }}>Education:</h5>
              <div className="edu-details">
                <p>Topmax City College, Ogba, Lagos.</p>
                <p>{schoolAttended}</p>
                <p>{courseOfStudy}</p>
                <small>{yearOfStudy}</small>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </section>
  );
};

export default Profile;
