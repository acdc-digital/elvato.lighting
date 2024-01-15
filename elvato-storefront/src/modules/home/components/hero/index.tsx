'use client'

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Importing icons from React Icons

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['/hero-img-1.svg', '/hero-img-2.svg', '/hero-img-3.svg']; // Add more image paths as needed

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="h-[75vh] w-full overflow-hidden relative">
      <div className="h-full w-full">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          >
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-32 gap-6">
              {/* Add your content for each slide here */}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 hover:bg-white hover:bg-opacity-50 p-2 rounded-full transition duration-300 ease-in-out"
      >
        <IoIosArrowBack className="text-white text-3xl hover:text-gray-700" /> {/* Previous Arrow with hover effect */}
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 hover:bg-white hover:bg-opacity-50 p-2 rounded-full transition duration-300 ease-in-out"
      >
        <IoIosArrowForward className="text-white text-3xl hover:text-gray-700" /> {/* Next Arrow with hover effect */}
      </button>
    </div>
  );
};

export default Hero;





