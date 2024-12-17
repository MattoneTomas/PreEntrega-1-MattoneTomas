import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    const categories = ["Camisetas", "Shorts", "Zapatillas"];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Nike
                </Link>
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
                                <Link
                                    to={`/category/${category.toLowerCase()}`}
                                    className="nav-link"
                                >
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export { NavBar };