import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  let navRef = useRef();

  const shownavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive-nav");
    }
  };

  return (
    <>
      <header>
        <button className='nav-btn' onClick={shownavbar}>
          <FaBars />
        </button>

        <nav ref={navRef}>
          <button className='nav-btn nav-close-btn' onClick={shownavbar}>
            <FaTimes />
          </button>

          <a href='#'>خانه</a>
          <a href='#'>درباره ما</a>
          <a href='#'>دسته بندی ها </a>
        </nav>

        <h3>Logo</h3>
      </header>
    </>
  );
}

export default Navbar;
