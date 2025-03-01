"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="relative bg-white pt-4 md:pt-24 pb-4 mx-3 md:mx-0">
      <div className="relative w-full max-w-7xl mx-auto bg-white">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
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
              <div className="absolute inset-0 bg-black/40 flex flex-col md:justify-center justify-end text-white p-4 sm:px-0">
                <div className="min-w-[90%] sm:max-w-2xl mx-auto text-center">
                  <h2 className="text-white font-poppins text-xl sm:text-4xl leading-snug sm:leading-[120%]">
                    Ready to take the first step toward experiencing the thrill
                    of river rafting?
                  </h2>
                  <p className="mt-3 text-white text-sm sm:text-[24px] font-normal leading-snug sm:leading-[120%]">
                    Plan your ultimate river rafting adventure in seconds!
                    Custom itineraries, automated reminders, and seamless
                    bookings make your rafting trip planning easier than ever.
                  </p>
                  <div className="flex justify-center items-center mt-4">
                    <button className="text-orange-500 bg-white px-4 rounded-full py-2 text-sm">
                      Explore Available Deals!
                    </button>
                  </div>
                </div>
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
              <div className="absolute inset-0 bg-black/40 flex flex-col md:justify-center justify-end text-white p-4 sm:px-0">
                <div className="min-w-[90%] sm:max-w-2xl mx-auto text-center">
                  <h2 className="text-white font-poppins text-xl sm:text-4xl leading-snug sm:leading-[120%]">
                    Ready to take the first step toward experiencing the thrill
                    of river rafting?
                  </h2>
                  <p className="mt-3 text-white text-sm sm:text-[24px] font-normal leading-snug sm:leading-[120%]">
                    Plan your ultimate river rafting adventure in seconds!
                    Custom itineraries, automated reminders, and seamless
                    bookings make your rafting trip planning easier than ever.
                  </p>
                  <div className="flex justify-center items-center mt-4">
                    <button className="text-orange-500 bg-white px-4 rounded-full py-2 text-sm">
                      Explore Available Deals!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSection;
