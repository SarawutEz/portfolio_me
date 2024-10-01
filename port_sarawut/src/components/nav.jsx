import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'

function MyNavbar({ scrollToSection }) {
    
    {/*red line*/}
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    {/*off dropdown*/}
    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                dropdownRef.current.removeAttribute('open');
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed top-0 z-50 navbar bg-base-100 bg-opacity-80">
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#f4364d] rounded-r-3xl" style={{ scaleX }} />
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl text-[#fff]">
                    <Typewriter
                        words={['Sarawut Wisetphon']}
                        loop
                        cursor
                        typeSpeed={70}
                        deleteSpeed={500}
                        delaySpeed={5000}
                    />
                </a>
            </div>

            <div className="navbar-end text-[#fff]">
                <details ref={dropdownRef} className="dropdown dropdown-end rounded-full">
                    <summary className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </summary>
                    <ul className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#fff] bg-base-100">
                        <li><a onClick={() => scrollToSection('welcome-section')}>Welcome</a></li>
                        <li><a onClick={() => scrollToSection('Profile-section')}>Profile</a></li>
                        <li><a>About</a></li>
                    </ul>
                </details>
            </div>
        </div>
    );
}

export default MyNavbar;