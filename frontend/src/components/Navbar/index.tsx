import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary main-nav">
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="link">
          <span>Carros Top</span>
        </a>
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
              <a className="text-primary" href="link">Home</a>
            </li>
            <li>
              <a className="text-primary" href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
