import React from "react";
import { Link } from "react-router-dom";
import MainLogo from '../../assets/MainLogo.svg'
import './Navbar.css'

const Navbar = () => {
    return <>
        <nav className="nav">
            <div className="logo">
                <Link to="/"><img src={MainLogo} alt="MainLogo" /></Link>
            </div>
            <ul className="nav-list">
                <li><Link to="/">Trade</Link></li>
                <li><Link to="/">Earn</Link></li>
                <li><Link to="/">Support</Link></li>
                <li><Link to="/">About</Link></li>
            </ul>
            <div className="connect-btn">
                <button className="btn">Connect wallet</button>
            </div>
      </nav>
  </>;
};

export default Navbar;
