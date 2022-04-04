import styles from "./Navbar.module.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Colors from "../../Constants/Colors";
import Logo from "../../assets/GMALogo.jpg";

const Navbar = (props) => {
  // const itemColor = Colors.red;
  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-container"]}>
          <Link to="/" className={styles["navbar-logo"]}>
            GMA Tournaments
          </Link>
          {/* <div className={styles["mobile-icon"]}>
            <FaBars size={25} />
          </div> */}
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
              href="https://www.gemsmodernacademy-dubai.com/en"
              className={styles["nav-btn"]}
            >
              {/* <FaUserCircle size={50} /> */}
              <img src={Logo} className={styles["logo"]} />
            </a>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
