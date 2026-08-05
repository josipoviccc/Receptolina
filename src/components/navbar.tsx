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
                    <li><Link to="/sweetRecipes">Slatko</Link></li>
                    <li><Link to="/savoryRecipes">Slano</Link></li>
                    <li><Link to="/pastryRecipes">Peciva</Link></li>
                    <li><Link to="/saucesRecipes">Umaci</Link></li>
                </ul>
        </nav>
    );
};