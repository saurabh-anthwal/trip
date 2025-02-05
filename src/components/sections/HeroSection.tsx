'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-orange-50 to-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-orange-600">Explore the world! ✈️</span>
            </div>
            
            <h1 className="text-5xl text-black lg:text-6xl font-bold leading-tight">
              Book With Us<br />
              And <span className="text-orange-500">Enjoy</span> Your<br />
              <span className="text-orange-500">Journey!</span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-md">
              Where adventure meets comfort. We create unforgettable travel experiences
            </p>
            
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Content - Image with Floating Elements */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative w-[500px] h-[500px]">
              {/* Main circular background */}
              <div className="absolute inset-0 bg-orange-500 rounded-full overflow-hidden">
                <Image
                  src="/hero-image.jpg"
                  alt="Happy traveler"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute bottom-40 -left-10 bg-white text-black rounded-full shadow-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">🎯</span>
                  <span>776k followers</span>
                </div>
              </div>

              <div className="absolute bottom-20 -right-10 bg-white text-black rounded-full shadow-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">🏨</span>
                  <span>204k follo  </span>
                </div>
              </div>

              <div className="absolute bottom-72 right-[-15%] bg-white text-black rounded-lg shadow-lg px-4 py-2">
                <div className="">
                  <p className='text-orange-500'>5000+</p>
                  <p className="text-sm text-gray-500">Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
