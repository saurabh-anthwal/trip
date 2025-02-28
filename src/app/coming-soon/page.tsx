import Image from 'next/image'
import React from 'react'

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Coming Soon Banner */}
        <div className="relative mb-6 p-14">
          <div className="transform -rotate-6 bg-[#FF6B00] text-white text-2xl font-bold py-2 px-8 inline-block">
            COMING SOON
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-xs py-1 px-3 text-white">
              Under Construction
            </div>
          </div>
          {/* Decorative Lines */}
          <div className="absolute -left-8 top-1/2 w-6 h-[2px] bg-black"></div>
          <div className="absolute -right-8 top-1/2 w-6 h-[2px] bg-black"></div>
        </div>

        {/* Main Text */}
        <h1 className="text-xl mb-4 flex items-center justify-center text-black">
          🌏 Your Next Adventure Awaits! ✨
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We&apos;re crafting a seamless travel booking experience just for you! 🛠️ Stay tuned as we bring you the best deals, destinations, and journeys. Coming soon! ⌛
        </p>

        {/* Notify Me Button */}
        <button className="bg-[#FF6B00] text-white px-6 py-2 rounded hover:bg-[#FF8533] transition-colors">
          Notify Me
        </button>
      </div>
    </div>
  )
}

export default ComingSoon
