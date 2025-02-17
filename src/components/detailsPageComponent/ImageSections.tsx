import React from 'react'
import Image from "next/image";

const ImageSections = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
    <div className="col-span-2">
      <Image src="/home-img/kedarnath.png" alt="Kedarnath" width={800} height={500} className="rounded-lg" />
    </div>
    <div className="flex flex-col gap-4">
      <div className="h-[200px] bg-gray-300 rounded-lg"></div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-[150px] bg-gray-300 rounded-lg"></div>
        <div className="h-[150px] bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-sm">See All</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ImageSections