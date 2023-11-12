import React, { useState, useEffect } from 'react';
import styles from './css/about.css';
import Header from '../../components/about-page-components/header-about/header';
import { motion } from "framer-motion"
import logo from "../../images/ubc bolt dog copy.png"
import TeamsPage from '../../components/about-page-components/team-components/team-page';

function About() {

    return (
        <div className="about-body header-body">
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ scale: 1.01}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.75}}
                mode="wait"
            >
                <div className="word-from-pres">
                    <div className='pres-message'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <img src={logo} className="pres-image" alt="pres-image" />
                </div>
            </motion.div>
            <div className='header-body'>
                <TeamsPage />
            </div>
        </div >
    );
}

export default About;