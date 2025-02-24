import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ImageSections = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {/* Main Image */}
      <div className="col-span-2">
        <Image
          src="/home-img/kedar.png"
          alt="Kedarnath"
          width={800}
          height={400}
          className="rounded-lg object-cover w-full h-[280px] sm:h-[400px] lg:h-[500px]"
        />
      </div>

      {/* Side Images */}
      <div className="hidden sm:flex flex-col gap-2">
        <div className="h-[300px] rounded-lg">
          <Image
            src="/home-img/kedar.png"
            alt="Small Image"
            width={150}
            height={150}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>{" "}
        {/* ⬅️ Height reduced */}
        <div className="grid grid-cols-2 gap-2">
          <div className="h-[200px] rounded-lg overflow-hidden">
            {" "}
            {/* ⬅️ Reduced */}
            <Image
              src="/banner.png"
              alt="Small Image"
              width={150}
              height={150}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="h-[200px] rounded-lg overflow-hidden relative">
            {" "}
            {/* ⬅️ Reduced */}
            <Image
              src="/banner.png"
              alt="See All"
              width={150}
              height={150}
              className="rounded-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm font-semibold">
              <FaArrowRight className="mr-1" /> See All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSections;
