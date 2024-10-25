import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className='flex-footer-cat'>
        <Categories />
        <Footer />
      </div>
    </>
  );
}

export default Home;
