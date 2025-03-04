"use client";
import React from "react";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative pt-7 md:pt-0">
      <div className="text-center relative w-full ">
        <div className="flex flex-col items-center">
          <Image
            src="/404/comming2.png"
            alt="soon"
            width={588}
            height={250}
            className=""
          />
          <h1 className="text-lg md:text-3xl font-semibold mb-4 flex items-center justify-center text-black">
            🌏 Your Next Adventure Awaits! ✨
          </h1>
          <p className="text-gray-600 mb-8 text-sm md:text-2xl  max-w-5xl mx-auto">
            {`We're crafting a seamless travel booking experience just for you! 🚀 Stay tuned as we bring you the best deals, destinations, and journeys. Coming soon! ⏳`}
          </p>
          <button className="bg-[#FF7F00] text-sm md:text-2xl text-white px-6 py-2 rounded hover:bg-[#FF8533] transition-colors">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
