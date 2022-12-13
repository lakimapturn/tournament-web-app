import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/GMALogo.jpg";
// import MobileLogo from "../../assets/GMALogo-mobile.png";
import { useState } from "react";
import Colors from "../../Constants/Colors";
import {
  Collapse,
  Nav,
  NavbarToggler,
  NavItem,
  Navbar as NavBarBar,
} from "reactstrap";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  window.addEventListener("resize", () => isOpen && setIsOpen(false));

  // const getLogo = () => {
  //   if (window.innerWidth < 612) return MobileLogo;
  //   return Logo;
  // };

  const checkIsActive = (link) => {
    return location.pathname === link ? Colors.gold : Colors.black;
  };

  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-content"]}>
          <div className={styles["navbar-container"]}>
            <Link to="/" className={styles["navbar-logo"]}>
              GMA Tournaments
            </Link>
            <div className={styles["mobile-icon"]}>
              <NavBarBar light>
                <NavbarToggler
                  className="me-2"
                  onClick={() => setIsOpen((prevState) => !prevState)}
                />
              </NavBarBar>
            </div>
            <ul className={styles["nav-menu"]}>
              <li className={styles["nav-item"]}>
                <Link to="/" className={styles["nav-link"]}>
                  Home
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link to="/tournaments" className={styles["nav-link"]}>
                  Tournaments
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link to="/about" className={styles["nav-link"]}>
                  About
                </Link>
              </li>
            </ul>
            <nav className={styles["nav-btn"]}>
              <a
                href={"https://www.gemsmodernacademy-dubai.com/en"}
                className={styles["nav-btn"]}
              >
                <img src={Logo} className={styles["logo"]} alt="GMA-Logo" />
              </a>
            </nav>
          </div>
        </div>
        <Collapse navbar isOpen={isOpen} style={{ position: "sticky" }}>
          {/* <img src={Logo} className={styles["logo"]} /> */}
          <hr />
          <Nav navbar>
            <NavItem>
              <Link
                to="/"
                className={styles["nav-link"]}
                style={{ color: checkIsActive("/") }}
              >
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/tournaments"
                className={styles["nav-link"]}
                style={{ color: checkIsActive("/tournaments") }}
              >
                Tournaments
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/about"
                className={styles["nav-link"]}
                style={{ color: checkIsActive("/about") }}
              >
                About
              </Link>
            </NavItem>
          </Nav>
          <hr />
        </Collapse>
      </nav>
    </>
  );
};

export default Navbar;
