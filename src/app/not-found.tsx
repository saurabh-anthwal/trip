import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center">
        {/* 404 Text */}
        <h1 className="text-[200px] font-bold text-[#FF6B00] leading-none">
          404
        </h1>
        
        {/* Mountain and Tent Illustration */}
        <div className="relative w-[300px] h-[200px] mx-auto -mt-20">
          <Image
            src="/404/mountains.svg"
            alt="Mountains with tent"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Error Message */}
        <h2 className="text-xl font-medium text-gray-900 mt-4 mb-2">
          PAGE NOT FOUND
        </h2>
        <p className="text-gray-600 mb-8">
          Your desired page was not found!
        </p>
        
        {/* Return Button */}
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
        >
          Return to the main page
        </Link>
      </div>
    </div>
  )
}
