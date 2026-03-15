import React, { useRef } from "react";

const Navbar = () => {
    const navRef = useRef(null);
  const linksRef = useRef([]);
    const contactRef = useRef(null);
    return (
        <nav
        ref={navRef} 
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-amber-400"
      >
        <div></div>
    </nav>
    );
};

export default Navbar