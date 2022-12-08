import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../nav/NavBar";
import homeo from "../assets/homeo.svg";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <NavBar />
        <div className="home-arena">
          <div className="home-o-wrap">
            <div className="home-o">
              <img id="home-o" src={homeo} />
            </div>
            <div className="home-text-wrap">
              <h2 className="home-title">RAPPORT</h2>
              <p className="home-p">Keeping old ties together...</p>
            </div>
          </div>

          <div className="home-btn">
            <Link to="/signup">
              <button id="home-btn">CLICK TO REGISTER</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
