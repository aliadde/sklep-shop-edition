import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ScrollCloth from "../components/ScrollCloth";
import ScrollGame from "../components/ScrollGame";
import ScrollMakeup from "../components/ScrollMakeup";
function Home() {
  return (
    <>
      <Navbar />
      <div className='flex-footer-cat'>
        <Categories />
        <ScrollCloth />
        <ScrollGame />
        <ScrollMakeup />
        <Footer />
      </div>
    </>
  );
}

export default Home;
