"use client"
import { useEffect, useState } from "react";
import { testimonials } from "@/data/mockData";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white relative py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg sm:text-4xl font-normal text-black leading-10">See What Travelers Are Saying</h2>
        <div className="relative mt-8">
          <div className="flex md:flex-row flex-col-reverse items-center gap-6 md:justify-between bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-6xl mx-auto">
            <div className="text-left flex flex-col h-60 py-4 justify-between">
              <p className="text-gray-600 text-base sm:text-xl font-medium">{testimonials[currentIndex].comment}</p>
              <div>
                <h4 className="text-gray-900 font-semibold text-lg sm:text-2xl mt-4">{testimonials[currentIndex].name}</h4>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-6 w-6 ${i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-400"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={150}
                height={150}
                className="min-w-60 min-h-60 rounded-xl object-cover"
              />
            </div>
          </div>
          {!isMobile && (
            <>
              <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-lg text-black"><BsArrowLeft /></button>
              <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-lg text-black"><BsArrowRight /></button>
            </>
          )}
          {isMobile && (
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-gray-900" : "bg-gray-400"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
