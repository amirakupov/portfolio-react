import React from "react";

const Header = ({ headerRef }) => {
    return (
        <div ref={headerRef} className="fixed top-0 left-0 w-full bg-gray-950 p-4 text-white opacity-0">
            <h2 className="text-4xl">My Header</h2>
        </div>
    );
};

export default Header;

