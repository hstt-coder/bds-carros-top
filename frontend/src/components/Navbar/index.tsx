import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary main-nav">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-primary">
          <span>Carros Top</span>
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto main-menu">
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                className="text-primary"
                href="link"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                activeClassName="active"
                className="text-primary"
                href="link"
              >
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
