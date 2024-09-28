import React, { useState, useEffect } from 'react';
import logo1 from './images/logo1.png';
import { Link, useLocation } from 'react-router-dom';
import togglebar from "../Home/images/togglebar.png";
import back from "./images/back.png";
import closeIcon from "./images/close.png"; // Add an image for the close button

export default function Navbar() {
    const [shadow, setShadow] = useState('none');
    const [bg, setBg] = useState("rgb(22 22 22 / 0%)");
    const [isCollapsed, setIsCollapsed] = useState(true);

    const giveShadow = () => {
        if (window.scrollY > 0) {
            setShadow('0px 0.2px 0px #f8f7f4');
            setBg("rgb(22, 22, 22)");
        } else {
            setShadow('none');
            setBg("rgb(22 22 22 / 0%)");
        }
    };

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
        setBg("rgb(22, 22, 22)");
    };

    const closeNavbar = () => {
        setIsCollapsed(true);
        setBg("rgb(22 22 22 / 0%)");
    };

    useEffect(() => {
        window.addEventListener('scroll', giveShadow);
        return () => {
            window.removeEventListener('scroll', giveShadow); // Clean up event listener
        };
    }, []);

    const location = useLocation();

    return (
        <>
            <div className="Navbar" style={{ background: bg, boxShadow: shadow }}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {location.pathname === '/about' && (
                            <Link className="navbar-brand" to="">
                                <img loading="lazy" className='back' src={back} alt="Logo" />
                            </Link>
                        )}
                        {location.pathname !== '/about' && (
                            <img loading="lazy" className="logo1" src={logo1} alt="Logo" />
                        )}

                        {location.pathname !== '/about' && (
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded={!isCollapsed}
                                aria-label="Toggle navigation"
                                onClick={toggleNavbar}
                            >
                                <span>
                                    <img loading="lazy" src={isCollapsed ? togglebar : closeIcon} alt="Toggle" />
                                </span>
                            </button>
                        )}

                        <div className={`collapse navbar-collapse ${isCollapsed ? 'collapse' : 'show'}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {location.pathname === '/' && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={closeNavbar} aria-current="page" to="/about">
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#sec2" onClick={closeNavbar}>
                                                Projects
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#sec4" onClick={closeNavbar}>
                                                Contacts
                                            </a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
