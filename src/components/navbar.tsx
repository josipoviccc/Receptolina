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
                    <li><NavLink to="/categoryPage/slatko" className="navbarLink">Slatko</NavLink></li>
                    <li><NavLink to="/categoryPage/slano" className="navbarLink">Slano</NavLink></li>
                    <li><NavLink to="/categoryPage/pecivo" className="navbarLink">Peciva</NavLink></li>
                    <li><NavLink to="/categoryPage/umaci" className="navbarLink">Umaci</NavLink></li>
                </ul>
        </nav>
    );
};