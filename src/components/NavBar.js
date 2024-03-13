import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/main" className="nav-link">Main</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
    </nav>
  )
}

export default NavBar;