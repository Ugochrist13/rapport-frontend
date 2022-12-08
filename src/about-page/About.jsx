import React from "react";
import aboutone from "../assets/about1.jpg";
import abouttwo from "../assets/about2.jpg";
import aboutthree from "../assets/about3.jpg";
import Footer from "../footer/Footer";
import NavBar from "../nav/NavBar";
import "./about.css";

function About() {
  return (
    <>
      <div className="about-container">
      <NavBar />
        <h1 className="about-heading">RAPPORT</h1>
        <div className="about-wrap">
          <section className="about-section">
            <p className="aboutp">
              A platform to connect with old school friends, get together and
              rekindle old memories while creating new one
            </p>
            <div className="aboutimgwrap">
              <img src={aboutone} className="aboutimg" />
            </div>
          </section>
          <section className="about-section even">
            <div className="aboutimgwrap">
              <img src={abouttwo} className="aboutimg" />
            </div>
            <p className="aboutp">
              Reach out to old friends for jobs, contract, offers and business
            </p>
          </section>
          <section className="about-section">
            <p className="aboutp">Get to know your friends that are close by</p>
            <div className="aboutimgwrap">
              <img src={aboutthree} className="aboutimg" />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
