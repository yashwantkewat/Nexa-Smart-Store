import React, { useEffect } from "react";
import "../AllCssStyle/home.css"; // Import the CSS file
import ImageSlider from "../ImageSlider";

const Home = () => {
  useEffect(() => {
    // JavaScript functionality to handle animations and interactions
    const app = document.querySelector('.app');
    const img = document.querySelector('.app__img');
    const pageNav1 = document.querySelector('.pages__item--1');
    const pageNav2 = document.querySelector('.pages__item--2');
    let animation = true;
    let curSlide = 1;
    let scrolledUp, nextSlide;

    const pagination = (slide, target) => {
      animation = true;
      if (target === undefined) {
        nextSlide = scrolledUp ? slide - 1 : slide + 1;
      } else {
        nextSlide = target;
      }

      document.querySelector(`.pages__item--${nextSlide}`).classList.add('page__item-active');
      document.querySelector(`.pages__item--${slide}`).classList.remove('page__item-active');

      app.classList.toggle('active');
      setTimeout(() => {
        animation = false;
      }, 3000);
    };

    const navigateDown = () => {
      if (curSlide > 1) return;
      scrolledUp = false;
      pagination(curSlide);
      curSlide++;
    };

    const navigateUp = () => {
      if (curSlide === 1) return;
      scrolledUp = true;
      pagination(curSlide);
      curSlide--;
    };

    setTimeout(() => {
      app.classList.add('initial');
    }, 1500);

    setTimeout(() => {
      animation = false;
    }, 4500);

    const handleScroll = (e) => {
      const delta = e.wheelDelta || -e.detail;
      if (animation) return;
      if (delta > 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    };

    const handleClick = (e) => {
      if (animation) return;
      const target = +e.target.getAttribute('data-target');
      pagination(curSlide, target);
      curSlide = target;
    };

    document.addEventListener('mousewheel', handleScroll);
    document.addEventListener('DOMMouseScroll', handleScroll);
    document.querySelectorAll('.pages__item:not(.page__item-active)').forEach(item => {
      item.addEventListener('click', handleClick);
    });

    return () => {
      document.removeEventListener('mousewheel', handleScroll);
      document.removeEventListener('DOMMouseScroll', handleScroll);
      document.querySelectorAll('.pages__item:not(.page__item-active)').forEach(item => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>  
    <div className="cont">
      <div className="mouse"></div>
      <div className="app">
        <div className="app__bgimg">
          <div className="app__bgimg-image app__bgimg-image--1"></div>
          <div className="app__bgimg-image app__bgimg-image--2"></div>
        </div>
        <div className="app__img">
          <img
            onMouseDown={() => false}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/whiteTest4.png"
            alt="city"
          />
        </div>
        <div className="app__text app__text--1">
          <div className="app__text-line app__text-line--4"> </div>
          <div className="app__text-line app__text-line--3"></div>
          <div className="app__text-line app__text-line--2"> </div>
          <div className="app__text-line app__text-line--1">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png "
              alt=""
            />
          </div>
        </div>
        <div className="app__text app__text--2">
          <div className="app__text-line app__text-line--4">Top offer </div>
          <div className="app__text-line app__text-line--3">of the year</div>
          <div className="app__text-line app__text-line--2">in Indore</div>
          <div className="app__text-line app__text-line--1">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pages">
        <ul className="pages__list">
          <li
            data-target="1"
            className="pages__item pages__item--1 page__item-active"
          ></li>
          <li data-target="2" className="pages__item pages__item--2"></li>
        </ul>
      </div>
     
      <a
        href="https://twitter.com/yashkewat13"
        target="_blank"
        className="icon-link icon-link--twitter"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"
          alt="Twitter"
        />
      </a>

    </div> 

    <div className="cont">
      {/* Your existing HTML structure */}
      <ImageSlider />
    </div>
        </>
  );
};

export default Home;
