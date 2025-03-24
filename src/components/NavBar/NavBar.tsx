import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
interface navBarProps {
  fullLeft: string;
  lnk: string;
  About: string;
}

export default function NavBar({ fullLeft, lnk, About }: navBarProps) {
  const location = useLocation(); // Get current URL path

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          aria-current="page"
        >
          {fullLeft}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                {About}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/games"
                className={`nav-link ${
                  location.pathname === "/games" ? "active" : ""
                }`}
              >
                {lnk}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
