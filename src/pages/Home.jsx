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

      <div className="flexed">
        <div className="make-flex-home">

          <div className="background-image">
            <section className='home-section'>
              <div className='home-box'>
                <div  className="">
                  <h3>چی لازم دارید؟ </h3>
                  <br />
                </div>
              </div>
            </section>
          </div>
          <Categories />
        </div>
              <div className="flex-bottom mr-2">
                <div className="mt-4">
                  <ScrollCloth />
                </div>
                <div className="mt-4">
                  <ScrollGame />
                </div>
                <div className="mt-4">
                  <ScrollMakeup />
                </div>
                <div className="mt-4">
                  <ScrollDigital />
                </div>
                <Footer />
              </div>
      </div>

    </>
  );
}

export default Home;
