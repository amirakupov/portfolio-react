import React from "react";
import { faGoogle, faLinkedin, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ headerRef }) => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div ref={headerRef} className="fixed top-0 left-0 w-full bg-gray-950 p-4 text-white opacity-0">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl">Amir Iakupov</h2>
                <div className="flex items-center space-x-4 justify-center">
                    <button onClick={() => scrollToSection('home')}>Home</button>
                    <button onClick={() => scrollToSection('about')}>About</button>
                    <button onClick={() => scrollToSection('technologies')}>Technologies</button>
                    <button onClick={() => scrollToSection('projects')}>Projects</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </div>
                <div className="mr-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-white hover:text-gray-300" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;

