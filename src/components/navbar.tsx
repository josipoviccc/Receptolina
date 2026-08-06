import {Link, NavLink} from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="navbar">
            <h2><Link to="/">RecipeBox</Link></h2>
            <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to="/categoryPage/slatko" className={({ isActive }) => isActive ? "active" : ""}>Slatko</NavLink></li>
                    <li><NavLink to="/categoryPage/slano" className={({ isActive }) => isActive ? "active" : ""}>Slano</NavLink></li>
                    <li><NavLink to="/categoryPage/pecivo" className={({ isActive }) => isActive ? "active" : ""}>Peciva</NavLink></li>
                    <li><NavLink to="/categoryPage/umaci" className={({ isActive }) => isActive ? "active" : ""}>Umaci</NavLink></li>
                </ul>
        </nav>
    );
};