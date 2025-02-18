import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ImageSections = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-2">
        <Image
          src="/home-img/kedarnath.png"
          alt="Kedarnath"
          width={800}
          height={490}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-[400px] bg-gray-300 rounded-lg"></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-[250px] rounded-lg overflow-hidden">
            <Image
              src="/banner.png"
              alt="Small Image"
              width={150}
              height={150}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="h-[250px] rounded-lg overflow-hidden relative">
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
