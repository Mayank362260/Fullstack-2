import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {
    const { state } = useContext(AppContext);

    return (
        <nav className="navbar">
        <h2>Exp 4 App</h2>
        <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/analytics">Analytics</Link>
        </div>
        <div>
        🛒 {state.cart.length}
        <ThemeToggle />
        </div>
        </nav>
    );
}

export default Navbar;
