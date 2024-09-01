import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'

function MyNavbar() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (

        <div className="fixed top-0 z-50 navbar">
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-base-content rounded-r-3xl" style={{ scaleX }} />
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl bg-base-100 bg-opacity-90"><Typewriter
                    words={['LOVE']}
                    loop
                    cursor
                    typeSpeed={70}
                    deleteSpeed={500}
                    delaySpeed={5000}
                /></a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end bg-base-100 rounded-full bg-opacity-90">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-opacity-90">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default MyNavbar;