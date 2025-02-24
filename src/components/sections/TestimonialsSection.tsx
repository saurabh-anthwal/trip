"use client";
import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/mockData";
import { StarIcon } from "@heroicons/react/20/solid";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-white relative">
      <div className="max-w-7xl mx-auto py-10 relative">
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-12">

          <div className="flex items-center justify-center gap-2 md:gap-4">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="12"
                viewBox="0 0 31 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#FF7F00" />
                <path d="M7 6H30.5" stroke="#FF7F00" />
              </svg>

              <h2 className="text-lg sm:text-4xl font-normal text-black leading-10 text-center">
                See What Travelers Are Saying
              </h2>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="12"
                viewBox="0 0 31 12"
                fill="none"
              >
                <circle cx="24.5" cy="6" r="6" fill="#FF7F00" />
                <path d="M23.5 6H0" stroke="#FF7F00" />
              </svg>
            </div>
          </div>
          <div className="relative flex flex-wrap items-center justify-center w-full">
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:left-[-50px] bg-gray-300 p-3 text-gray-800 rounded-full shadow-md"
            >
              <FaArrowLeft />
            </button>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-20 bg-gray-100 p-4 sm:p-6 rounded-xl shadow-lg w-full">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-gray-600 text-base sm:text-xl font-medium leading-6 sm:leading-8">
                  {testimonials[currentIndex].comment}
                </p>

                <h4 className="text-gray-900 font-semibold text-lg sm:text-2xl mt-4 sm:mt-8">
                  {testimonials[currentIndex].name}
                </h4>
                <div className="flex justify-center sm:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-8 w-8 ${
                        i < testimonials[currentIndex].rating
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl overflow-hidden order-first sm:order-none">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={200}
                  height={200}
                  className="w-32 h-32 sm:w-60 sm:h-60 rounded-xl object-cover"
                />
              </div>
            </div>
            <button
              onClick={handleNext}
              className="absolute right-0 sm:right-[-50px] text-gray-800 bg-gray-300 p-3 rounded-full shadow-md"
            >
              <FaArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
