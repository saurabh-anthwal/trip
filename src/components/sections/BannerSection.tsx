"use client"
import React, { useState } from 'react';

const slides = [
  { id: 1, text: 'Welcome to Our Travel Agency!' },
  { id: 2, text: 'Explore the Beauty of Nature!' },
  { id: 3, text: 'Book Your Next Adventure with Us!' },
];

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <div className="bg-gray-200 h-64 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-center text-black">{slides[currentIndex].text}</h2>
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between">
        <button onClick={handlePrev} className="bg-gray-300 p-2 rounded">Previous</button>
        <button onClick={handleNext} className="bg-gray-300 p-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default BannerSection;