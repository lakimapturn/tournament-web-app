import { BsGithub } from "react-icons/bs";

const Footer = (props) => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 m-4 border-top">
      <a
        className="col-md-4 mb-0 text-muted"
        style={{ textDecoration: "none" }}
        href="https://github.com/lakimapturn"
      >
        <BsGithub size={30} /> lakimapturn
      </a>

      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img
          src="https://www.misskatecuttables.com/uploads/shopping_cart/11480/large_trophy-0417.png"
          width="48"
          height="40"
        />
      </a>

      <ul className="nav col-md-4 justify-content-center">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-muted">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/tournaments" className="nav-link px-2 text-muted">
            Tournaments
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link px-2 text-muted">
            About
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
