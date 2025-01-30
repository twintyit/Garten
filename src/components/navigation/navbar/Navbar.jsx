import { Link } from 'react-router-dom';

import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <div>
                    <Link to="/" className="navbar-brand text-light"><img src="https://cdn-icons-png.flaticon.com/512/861/861054.png" alt="Logo" className="navbar-icon" />Preuß Gartenpflege</Link>
                </div>
                <div className="navbar-links">
                    <a className="btn" href="/">о нас</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;