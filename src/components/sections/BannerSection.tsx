"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const slides = [
  { id: 1, text: "Welcome to Our Travel Agency!" },
  { id: 2, text: "Explore the Beauty of Nature!" },
  { id: 3, text: "Book Your Next Adventure with Us!" },
];

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative bg-white pt-24 pb-4">
      <div className="relative w-full max-w-7xl mx-auto bg-white">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded-xl overflow-hidden"
        >
          <SwiperSlide>
            <div className="relative w-full h-[400px]">
              <Image
                src="/home-img/banner.png"
                alt="rafting"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-white text-center font-poppins text-5xl md:text-[55px] font-semibold leading-[120%]">
                  Ready to take the first step toward experiencing the thrill of
                  river rafting?
                </h2>
                <p className="mt-3 text-white text-center  text-2xl md:text-[24px] font-normal leading-[120%] max-w-2xl">
                  Plan your ultimate river rafting adventure in seconds! Custom
                  itineraries, automated reminders, and seamless bookings make
                  your rafting trip planning easier than ever.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-[400px]">
              <Image
                src="/home-img/river-rafting-rishikesh.jpg"
                alt="rafting"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-white text-center font-poppins text-5xl md:text-[55px] font-semibold leading-[120%]">
                  Ready to take the first step toward experiencing the thrill of
                  river rafting?
                </h2>
                <p className="mt-3 text-white text-center  text-2xl md:text-[24px] font-normal leading-[120%] max-w-2xl">
                  Plan your ultimate river rafting adventure in seconds! Custom
                  itineraries, automated reminders, and seamless bookings make
                  your rafting trip planning easier than ever.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSection;
