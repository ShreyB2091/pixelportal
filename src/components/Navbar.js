import React, { useState, useEffect } from 'react';
import logo from './logo.png';

const MyNavbar = () => {

    const [navbarColor, setNavbarColor] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            setNavbarColor('#222');
        } else {
            setNavbarColor('transparent');
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-dark" data-bs-theme="dark" style={{width: "100%", backgroundColor: {navbarColor}, height: "80px"}}>
                <div className="">
                    <a className="navbar-brand d-flex justify-content-center align-items-center" href="/" style={{marginTop: "-5px", height: "auto", padding: "5px", fontSize: "30px", fontWeight: "600"}}>
                    <img src={logo} alt="Logo" className="d-inline-block mx-3" height="60px"/>
                        Pixel Portal
                    </a>
                </div>
            </nav>
        </>
    );
}

export default MyNavbar;
