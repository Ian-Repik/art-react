import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    const location = useLocation();

    function handleHomeClick(event) {
        if (location.pathname === "/") {
            event.preventDefault();
        }
    }

    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <Link to="/" onClick={handleHomeClick}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/in-progress">In Progress</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;