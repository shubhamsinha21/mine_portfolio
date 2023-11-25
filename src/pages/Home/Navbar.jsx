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
        </nav>
    )
}
