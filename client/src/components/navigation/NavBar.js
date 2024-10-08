import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import "./css/NavBar.css";

/**
 * A component that renders a navigation bar at the top of the page.
 * This component contains social media links and a set of links to other pages.
 * It also contains a dropdown menu for services.
 */
function NavBar() {
  return (
    <div className="navbar">
      <section className="socials">
        <div className="logo">
          <FacebookIcon className="social-icon" />
          <InstagramIcon className="social-icon" />
          <TwitterIcon className="social-icon" />
          <LinkedinIcon className="social-icon" />
          <button id="switch_lang">Francais</button>
        </div>
      </section>
      <nav className="nav">
        <p id="home">
          <a href="/">Home</a>
        </p>
        <ul className="nav-links">
          <li className="menu">
            <a href="/about">About Us</a>
          </li>
          <li className="menu">Services</li>
          <li className="menu">
            <a href="/listings">Listings</a>
          </li>
          <li className="menu">
            <a href="/blogs">Blogs</a>
          </li>
          <li className="menu">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
