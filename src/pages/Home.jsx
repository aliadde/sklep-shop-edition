import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ScrollCloth from "../components/ScrollCloth";
import ScrollGame from "../components/ScrollGame";
import ScrollMakeup from "../components/ScrollMakeup";
import ScrollDigital from "../components/ScrollDigital";
function Home() {
  return (
    <>
      <Navbar />
      <div className='flex-all'>
        <Categories />
        <ScrollCloth />
        <ScrollGame />
        <ScrollMakeup />
        <ScrollDigital />
        <Footer />
      </div>
    </>
  );
}

export default Home;
