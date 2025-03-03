import React, { useState } from "react";
import { faGoogle, faLinkedin, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = ({ headerRef }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false); // Close menu on mobile after clicking a link
    };

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full bg-gray-950 p-4 text-white shadow-md z-50">
            <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
                {/* Logo / Name */}
                <h2 className="text-xl md:text-2xl font-bold">Amir Iakupov</h2>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                    <button onClick={() => scrollToSection("home")} className="hover:text-gray-300 transition">
                        Home
                    </button>
                    <button onClick={() => scrollToSection("about")} className="hover:text-gray-300 transition">
                        About
                    </button>
                    <button onClick={() => scrollToSection("technologies")} className="hover:text-gray-300 transition">
                        Technologies
                    </button>
                    <button onClick={() => scrollToSection("projects")} className="hover:text-gray-300 transition">
                        Projects
                    </button>
                    <button onClick={() => scrollToSection("contact")} className="hover:text-gray-300 transition">
                        Contact
                    </button>
                </nav>

                {/* GitHub Icon (Always Visible) */}
                <div className="hidden md:flex">
                    <a href="https://github.com/amirakupov" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-white hover:text-gray-300 transition" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6 text-white transition duration-300" />
                </button>
            </div>

            {/* Mobile Menu with Smooth Animation */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-90 backdrop-blur-md transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-500 ease-in-out z-40 md:hidden flex flex-col items-center justify-center space-y-6`}
            >
                <button onClick={() => scrollToSection("home")} className="text-2xl font-medium text-white hover:text-gray-300 transition">
                    Home
                </button>
                <button onClick={() => scrollToSection("about")} className="text-2xl font-medium text-white hover:text-gray-300 transition">
                    About
                </button>
                <button onClick={() => scrollToSection("technologies")} className="text-2xl font-medium text-white hover:text-gray-300 transition">
                    Technologies
                </button>
                <button onClick={() => scrollToSection("projects")} className="text-2xl font-medium text-white hover:text-gray-300 transition">
                    Projects
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-2xl font-medium text-white hover:text-gray-300 transition">
                    Contact
                </button>

                {/* Social Icons */}
                <div className="flex space-x-6 mt-4">
                    <a href="https://github.com/amirakupov" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="w-7 h-7 text-white hover:text-gray-300 transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/amir-iakupov/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 text-white hover:text-gray-300 transition" />
                    </a>
                    <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTelegram} className="w-7 h-7 text-white hover:text-gray-300 transition" />
                    </a>
                </div>

                {/* Close Button */}
                <button onClick={toggleMenu} className="absolute top-6 right-6">
                    <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-white transition duration-300" />
                </button>
            </div>
        </header>
    );
};

export default Header;



