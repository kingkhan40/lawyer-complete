import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <img src="./img/logo.png" alt="logo" />
        </div>
        <nav className={`${show ? "mobile-nav" : "list"}`}>
          <ul data-aos="zoom-in-left" data-aos-delay="200">
            <li>
              <Link aria-current="page" to="/" onClick={() => setShow(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShow(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/practice" onClick={() => setShow(false)}>
                Practice
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setShow(false)}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/clinte" onClick={() => setShow(false)}>
                Clients
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={() => setShow(false)}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setShow(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShow(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="socialIcons">
          <ul
            className="social-media-desktop"
            data-aos="zoom-in-left"
            data-aos-delay="200"
          >
            <li>
              <Link href="#" style={{ color: "blue", fontSize: "24px" }}>
                <BiLogoFacebook className="facebook" />
              </Link>
            </li>

            <li>
              <Link href="#" style={{ color: "red", fontSize: "24px" }}>
                <AiOutlineYoutube className="youtube" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={{ color: "rgb(241, 175, 7)", fontSize: "24px" }}
              >
                <AiOutlineInstagram className="instagram" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="toggleBtn">
          <button onClick={() => setShow(!show)}>
            {show ? (
              <RiCloseFill style={{ fontSize: "24px" }} />
            ) : (
              <GiHamburgerMenu style={{ fontSize: "24px" }} />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
