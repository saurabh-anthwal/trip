"use client";
import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/mockData";
import { StarIcon } from "@heroicons/react/20/solid";

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
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
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

              <h2 className="text-[42px] font-normal text-black leading-[50.4px] text-center">
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

          <div className="w-full flex items-center gap-[146px] justify-between bg-gray-100 p-6 rounded-xl shadow-lg h-[361px]">
            <div className="flex-1 pr-6">
              <p className="text-[#5E6282]  text-[21.282px] font-medium leading-[34px]">
                {testimonials[currentIndex].comment}
              </p>

              <h4 className="text-[#5E6282] font-poppins text-[24px] font-semibold leading-[28.8px] mt-[89px]">
                {testimonials[currentIndex].name}
              </h4>

              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentIndex].rating
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="w-[337px] h-[359px] rounded-xl overflow-hidden">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={337}
                height={359}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button onClick={handlePrev} className="bg-gray-300 p-2 rounded">
              Previous
            </button>
            <button onClick={handleNext} className="bg-gray-300 p-2 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
