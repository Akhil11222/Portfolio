import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-a.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"; /* RESPONSIVE: faBars, faTimes for hamburger menu */
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react"; /* RESPONSIVE: For menu toggle state */

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false); /* RESPONSIVE: State for mobile menu toggle */

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); /* RESPONSIVE: Toggle menu visibility */
  };

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() =>
          setIsMenuOpen(false)
        } /* RESPONSIVE: Close menu on logo click */
      >
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Akhil Tiwari" />
      </Link>
      <nav
        className={
          isMenuOpen ? "mobile-show" : ""
        } /* RESPONSIVE: Apply mobile-show class when menu is open */
      >
        <NavLink
          exact="true"
          activeClassName="active"
          to="/"
          onClick={toggleMenu} /* RESPONSIVE: Close menu on link click */
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="about-link"
          to="/about"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="contact-link"
          to="/contact"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          icon={faTimes}
          className="close-icon"
          color="#FFFFFF"
          onClick={toggleMenu}
        />{" "}
        /* RESPONSIVE: Close icon for mobile menu */
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/akhil-tiwari-889958326/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Akhil11222"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className="hamburger-icon"
        color="#FFFFFF"
        onClick={toggleMenu}
      />{" "}
      /* RESPONSIVE: Hamburger icon for mobile menu */
    </div>
  );
};

export default Sidebar;
