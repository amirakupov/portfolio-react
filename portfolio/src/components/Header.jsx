import React from "react";

const Header = ({ headerRef }) => {
    return (
        <div ref={headerRef} className="fixed top-0 left-0 w-full bg-gray-950 p-4 text-white opacity-0">
            <div className="flex items-center justify-between">
                <h2 className="text-4xl">кукукукуку</h2>
                <div className="flex items-center space-x-4 justify-center">
                    <button className="mr-4">Home</button>
                    <button className="mr-4">About</button>
                    <button className="mr-4">Technologies</button>
                    <button className="mr-4">Projects</button>
                </div>
                <div className="mr-4">
                    {/*<a href="https://github.com" target="_blank" rel="noopener noreferrer">*/}
                    {/*    <img src="path/to/github-icon.png" alt="GitHub" className="w-6 h-6" />*/}
                    {/*</a>*/}
                    <button className="mr-4">Contact</button>
                    <button className="mr-4">Contact</button>
                    <button className="mr-4">Contact</button>

                </div>
            </div>
        </div>
    );
};

export default Header;

