import React, { useState } from 'react';
import './AllCssStyle/ImageSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const images = [
    '/images/samsung1.jpg',
    '/images/samsung2.jpg',
    '/images/samsung3.jpg',
    '/images/samsung1.jpg', // Duplicate?
    '/images/samsung1.jpg',
    '/images/samsung2.jpg',
    '/images/samsung3.jpg',
    '/images/samsung1.jpg',
  ];

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container">
      <div id="slide">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + image})` }}
            onClick={() => handleClick(index)} // Click handler for each image
          >
            <div className="content">
              <div className="name">Top Product</div>
              <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
