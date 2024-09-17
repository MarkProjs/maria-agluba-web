import React from 'react';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
    return(
        <div className="navbar">
            <div className="socials">
                <SocialIcon url="https://www.facebook.com/" target='_blank'/>
                <SocialIcon url="https://www.instagram.com/" target='_blank'/>
                <SocialIcon url="https://www.twitter.com/" target='_blank'/>
                <SocialIcon url="https://www.linkedin.com/" target='_blank'/>
                <button className="switch_lang">Francais</button>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li>Services and Info</li>
                <li><a href="/listings">Listings</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </div>
    );

}

export default NavBar;
