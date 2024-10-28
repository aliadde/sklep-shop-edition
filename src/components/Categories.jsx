import React, { useEffect } from "react";
import gameeanimation from "/public/img/باکس های کتگوری/game-animation/controller.json";
import digitalanimation from "/public/img/باکس های کتگوری/digital-animation/digital-animation.json";
import clothanimation from "/public/img/باکس های کتگوری/cloth-animation/cloth-animation.json";
import makeupanimation from "/public/img/باکس های کتگوری/makeup-animation/nakeup-animation.json";
import Lottie from "lottie-react";

function Categories() {
  useEffect(() => {
    // if hover on the box of categories
    const box = document.getElementsByClassName("inside-box");
    for (let i = 0; i < box.length; i++) {
      box[i].addEventListener("mouseenter", () => {
        console.log("Mouse entered the box");
      });
    }
  });

  return (
    <>
      <section className='home-section'>
        <div className='home-box'>
          <div>
            <h3>چی لازم دارید؟ </h3>
            <br />
            <a href='.flexbox-category'>دسته بندی ها</a>
          </div>
        </div>
      </section>
      <section className='categories-section'>
        <div className='flexbox-category'>
          <div className='inside-box'>
            <div className='game-animation'>
              بازی
              <Lottie
                animationData={gameeanimation}
                width={51}
                autoplay={false}
              />
            </div>
          </div>
        </div>
        <div className='flexbox-category'>
          <div className='inside-box'>
            <div className='cloth-animation'>
              لباس
              <Lottie
                animationData={clothanimation}
                width={51}
                autoplay={false}
                className='mt-3'
              />
            </div>
          </div>
        </div>
        <div className='flexbox-category'>
          <div className='inside-box'>
            <div className='makeup-animation'>
              آرایشی
              <Lottie
                animationData={makeupanimation}
                width={51}
                autoplay={false}
              />
            </div>
          </div>
        </div>
        <div className='flexbox-category'>
          <div className='inside-box'>
            <div className='digital-animation'>
              دیجیتال
              <Lottie
                animationData={digitalanimation}
                width={51}
                autoplay={false}
                className='mt-2'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
