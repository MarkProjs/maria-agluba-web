import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <div className="socials">
        <SocialIcon url="https://www.facebook.com/" target="_blank" />
        <SocialIcon url="https://www.instagram.com/" target="_blank" />
        <SocialIcon url="https://www.twitter.com/" target="_blank" />
        <SocialIcon url="https://www.linkedin.com/" target="_blank" />
        <button className="switch_lang">Francais</button>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li className="dropdown" onMouseDown={toggle} onMouseLeave={toggle}>
            <a href="#">Services</a>
            {isOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">For Buyers</a>
                </li>
                <li>
                  <a href="#">For Sellers</a>
                </li>
                <li>
                  <a href="#">Directory of Professionals</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/listings">Listings</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
