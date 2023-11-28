import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'


export default function Navbar() {

    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.addEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, [])

    return (
        <nav className={`navbar ${navActive ? 'active' : ''}`}>
            <div>
                <img src='./img/logo.svg' alt='logo' />
            </div>
            <a className={`nav-hamburger ${navActive ? 'active' : ''}`}
                onClick={toggleNav}>
                <span className='nav-hamburger-line'></span>
                <span className='nav-hamburger-line'></span>
                <span className='nav-hamburger-line'></span>
            </a>

            <div className={`navbar-items ${navActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu}
                            activeClass='navBar-active-content'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to='heroSection'
                            className='navbar-content'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                            activeClass='navBar-active-content'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to='myPortfolio'
                            className='navbar-content'
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                            activeClass='navBar-active-content'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to='aboutMe'
                            className='navbar-content'
                        >
                            AboutMe
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                            activeClass='navBar-active-content'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to='testimonial'
                            className='navbar-content'
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>
            </div>

            <Link
                onClick={closeMenu}
                activeClass='navBar-active-content'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='contactMe'
                className='btn btn-outline-primary'
            >
                Contact Me
            </Link>
        </nav>
    )
}
