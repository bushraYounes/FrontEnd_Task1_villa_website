import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import './NavBar.scss'
import VisitButton from '../VisitButton/VisitButton';
const NavBar = ({ logo, navItems, buttonContent }) => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navBar ${isSticky ? 'sticky' : ''}`}>
            <div className="navBarContainer">
                <h1>{logo}</h1>
                <div className='items'>
                    <ul>
                        {navItems.map((element, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={element.route} className={({ isActive }) => isActive ? "active" : ""}> {element.label}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="buttonSection">
                        <VisitButton
                            icon={buttonContent.icon}
                            text={buttonContent.label}
                        />
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default NavBar