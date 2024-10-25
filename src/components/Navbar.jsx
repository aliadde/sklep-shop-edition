import React, { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  let navRef = useRef();

  const shownavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive-nav");
    }
  };

  // check window size
  let screenWidth = screen.width;
  useEffect(() => {
    if (screenWidth > 768) {
      const navBtn = document.getElementsByClassName("nav-btn");
      for (let i = 0; i < navBtn.length; i++) {
        navBtn[i].style.visibility = "hidden";
      }
    }
  }, [screenWidth]);
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

        <img
          src='/public/img/logo/no bg/no-bg-white.png'
          alt='logo'
          width={70}
        />
      </header>
    </>
  );
}

export default Navbar;
