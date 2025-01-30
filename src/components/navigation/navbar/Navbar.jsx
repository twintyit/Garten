import { Link } from 'react-router-dom';

import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <div>
                    <Link to="/" className="navbar-brand text-light"><img src="https://cdn-icons-png.flaticon.com/512/4063/4063742.png" alt="Logo" className="navbar-icon" />Shnurok </Link>
                </div>
                <div className="navbar-links">
                    <p>button</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;