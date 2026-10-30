import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    function handleHomeClick(event) {
        setMenuOpen(false);

        if (location.pathname === "/") {
            event.preventDefault();
        }
    }

    return (
        <nav className="main-nav">
              <button
                className="menu-toggle"
                type="button"
                aria-expanded={menuOpen}
                aria-controls="main-nav-links"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "Close Menu" : "Menu"}
            </button>

            <ul
                id="main-nav-links"
                className={menuOpen ? "nav-links open" : "nav-links"}
            >
                <li>
                    <Link to="/" onClick={handleHomeClick}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="/gallery"
                        onClick={() => setMenuOpen(false)}
                    >
                        Gallery
                    </Link>
                </li>

                <li>
                    <Link
                        to="/in-progress"
                        onClick={() => setMenuOpen(false)}
                    >
                        In Progress
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;