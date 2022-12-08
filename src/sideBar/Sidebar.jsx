import React, { useEffect, useState, useRef } from "react";
import {
  FaTh,
  FaUserAlt,
  FaUsers,
  FaExchangeAlt,
  FaUserEdit,
  FaBars,
} from "react-icons/fa";

import "./SideBar.css";

import { NavLink } from "react-router-dom";



const Sidebar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const barRef = useRef ()
  useEffect (()=>{
    const CloseBar = (e) => {
        if(e.path[3] !== barRef.current){
             setIsOpen(false)
        }
};
    document.body.addEventListener('click', CloseBar)

    return () => {
        document.body.removeEventListener('click', CloseBar)
    }
  }, [])

  const menuItem = [
  
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/groups",
      name: "Groups",
      icon: <FaUsers />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/edit",
      name: "Edit Profile",
      icon: <FaUserEdit/>,
    },
    {
      path: "/",
      name: "Sign Out",
      icon: <FaExchangeAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "150px" : "50px"  }} className="sidebar" ref={barRef}>
        <div className="top_section">
          <div style={{marginLeft: isOpen ? "10px" : "10px"}} className="bars bar-logo">
              <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none"  }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
