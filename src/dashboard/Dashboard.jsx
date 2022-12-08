import React, { useState , useEffect} from 'react';
import './dashboard.css'
import ballons from '../assets/undraw_Balloons_re_8ymj.png'
// import {FaUsers} from "react-icons/fa";
import Sidebar from '../SideBar/Sidebar';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.svg";
// import {  IoMdPerson } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {
  const navigate = useNavigate();

  const [name, setName] = useState("Abiodun");
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [posts, setposts] = useState([]);
  const [search, setSearch] = useState(" ");

  const signout = () => {
    const yes = "Are you sure you want to sign out?";
    if (confirm(yes) == true) {
      navigate("/login");
      console.log("a");
    }
  };

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=Nigeria")
      .then((response) => {
        console.log(response.data);
        setposts(response.data);
      });
  }, []);

  return (
    <Sidebar>
      <section className="dash-wrap">
        <nav className="dashboard-navbar">
          <div
            style={{ width: "80%", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 className="dashboard">Dashboard</h3>
              <div className="dashboard-input">
                <div className="dashboard-btns">
                  {/* <Link to='/groups' className='profile-icon'> <FaUsers/> </Link>
                            <Link to='/profile'><IoMdPerson className="profile-icon" /></Link> */}
                  {/* <Link onClick={signout} to> */}
                  <button className="dashboard-btn-red" onClick={signout}>
                    Sign-out
                  </button>
                  <div className="bars">
                    <Link to="/" className="nav-logo">
                      <img src={Logo} className="Sidebar-logo" color="white" />
                    </Link>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="dashboard-banner">
          <img src={ballons} className="dashboard-img" alt="" />
          <div className="dashboard-box">
            <h3 className="dashboard-name">Hello {name},</h3>
            <p>{date}</p>
            <h2 className="dashboard-welcome">
              Welcome to <span className="dashboard-text">RAPPORT</span>...
            </h2>
            <p className="dashboard-p">Keeping old ties together...</p>
          </div>
        </div>
        <hr className="dashboard-line" />
        <div className="dashboard-filter">
          <div className="dashboard-connect">
            Connect with your ex-school mates
          </div>
          <div className="dashboard-filterIcon">
            <input
              type="text"
              placeholder="Search for your school here"
              className="filterInput"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="dashboard-schools">
                {posts?.filter((item) => {
                    return search.toString === '' ? item : item.name.includes(search)
                }).map(({id, name, web_pages}) => {
                    return(
                        <Link className='dashboard-link' to={``}>
                            <div className="dashboard-container" key={uuidv4}>
                                <h4 className="dashboard-name">{name}</h4>
                                <p className="dashboard-web">{web_pages}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    </Sidebar>
  );
}

export default Dashboard;
