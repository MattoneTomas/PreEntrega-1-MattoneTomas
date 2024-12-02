import "./navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({ onCategoryClick }) => {
    const categories = ["Camisetas", "Shorts", "Zapatillas"];
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Nike
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {categories.map((category, index) => (
                <li key={index} className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => onCategoryClick(category)}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    );
  };

export {NavBar}