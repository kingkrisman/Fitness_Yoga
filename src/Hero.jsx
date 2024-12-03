import React from "react";
import "./App.css";

import logo from "./assets/PrimaryLogo.png";

import shop from "./assets/shop.png";
import arrow from "./assets/arrow.png"

const Hero = () => {
  return (
    <div>
      <div id="header">
        <div className="container">
          <nav>
            <img src={logo} className="logo" alt="Logo" />
            <ul id="sidemenu">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">Services</a>
              </li>
              <li>
                <a href="#services">Our Facility</a>
              </li>
              <li>
                <a href="#portfolio">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="cta">
              <div>
                {" "}
                <img src={shop} alt="" />
              </div>
              Shop Now
            </button>
          </nav>
        </div>

        <div className="hero">
          <h1 className="hero-title">
            Yoga First
            <br />
            Fitness Always
          </h1>
          <p className="hero-dep">
            Welcome to Great Fitness, Los Angeles premier destination for yoga <br />
            and fitness enthusiasts. Nestled in the vibrant heart of the city,
            we  <br />offer a sanctuary where mind, body, and spirit align.
          </p>

<div className="hero-cta"><button className="cta">Book A Session</button> 
<button className="cta2">
              <div>
                {" "}
                <img src={arrow} alt="" />
              </div>
              Shop Now
            </button>

</div>

        </div>




      </div>
    </div>
  );
};

export default Hero;
