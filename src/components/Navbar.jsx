import React, { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { domainToASCII } from "url";
function Navbar() {
  let navRef = useRef();

  const shownavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive-nav");
    }
  };

  // check window size
  const btn = document.getElementsByClassName("nav-btn").style;
  // useEffect(() => {
  //   if (window.innerWidth > 768) {
  //     btn.visibility = "hidden";
  //   }
  // });
  // .style.visibility = "hidden";
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
