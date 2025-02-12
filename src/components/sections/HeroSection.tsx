"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-orange-50 to-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center bg-white px-[31.558px] py-[15.779px] gap-[15.779px] rounded-[98.617px] shadow-[0px_844.164px_236.681px_rgba(0,0,0,0),0px_540.422px_215.972px_rgba(0,0,0,0.01),0px_303.741px_182.442px_rgba(0,0,0,0.04),0px_135.106px_135.106px_rgba(0,0,0,0.06),0px_33.53px_73.963px_rgba(0,0,0,0.07)]">
              <span className="text-[14px] font-semibold text-[#FF7F00] leading-[120%] font-poppins">
                Explore the world!
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8926 4.24871C10.2315 4.24871 9.66912 4.70809 9.51125 5.32726H14.8195C14.6617 4.70809 14.0993 4.24871 13.4381 4.24871H10.8926ZM16.3192 5.32725H18.2729C20.3448 5.32725 22.032 7.03494 22.032 9.13211C22.032 9.13211 21.9729 10.0199 21.9531 11.2563C21.9512 11.3541 21.9037 11.45 21.8258 11.5079C21.3513 11.8584 20.9171 12.1481 20.8776 12.168C19.2398 13.2665 17.3365 14.0394 15.3089 14.424C15.1767 14.4499 15.0465 14.3811 14.9793 14.2632C14.411 13.2785 13.3494 12.6374 12.1654 12.6374C10.9893 12.6374 9.91776 13.2715 9.33266 14.2572C9.26459 14.3731 9.13632 14.4399 9.0051 14.415C6.99427 14.0295 5.09099 13.2575 3.463 12.1779L2.5158 11.5189C2.43687 11.469 2.38753 11.3791 2.38753 11.2792C2.35793 10.7699 2.30859 9.13211 2.30859 9.13211C2.30859 7.03494 3.9958 5.32725 6.06779 5.32725H8.01152C8.19899 3.87921 9.41258 2.75073 10.8926 2.75073H13.4381C14.9182 2.75073 16.1318 3.87921 16.3192 5.32725ZM21.6965 13.4164L21.6571 13.4364C19.664 14.7745 17.2665 15.6634 14.7504 16.0329C14.3952 16.0828 14.04 15.8531 13.9414 15.4937C13.7243 14.6747 13.0238 14.1354 12.1851 14.1354H12.1752H12.1555C11.3169 14.1354 10.6163 14.6747 10.3993 15.4937C10.3006 15.8531 9.94538 16.0828 9.59018 16.0329C7.07419 15.6634 4.67659 14.7745 2.68353 13.4364C2.67366 13.4264 2.575 13.3665 2.49607 13.4164C2.40726 13.4664 2.40726 13.5862 2.40726 13.5862L2.47633 18.6793C2.47633 20.7765 4.15366 22.4742 6.22566 22.4742H18.1051C20.1771 22.4742 21.8544 20.7765 21.8544 18.6793L21.9334 13.5862C21.9334 13.5862 21.9334 13.4664 21.8446 13.4164C21.7953 13.3865 21.7361 13.3965 21.6965 13.4164ZM12.9054 17.6008C12.9054 18.0202 12.5798 18.3497 12.1654 18.3497C11.7609 18.3497 11.4254 18.0202 11.4254 17.6008V16.3125C11.4254 15.903 11.7609 15.5635 12.1654 15.5635C12.5798 15.5635 12.9054 15.903 12.9054 16.3125V17.6008Z"
                  fill="#FF7F00"
                />
              </svg>
            </div>

            <h1 className="text-[72px] text-black font-poppins font-semibold leading-[86.4px]">
              Book With Us And 
              <span className="text-[#FF7F00]"> Enjoy</span> Your
              <br />
              <span className="text-[#FF7F00]">Journey!</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              Where adventure meets comfort. We create unforgettable travel
              experiences{" "}
            </p>

            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Content - Image with Floating Elements */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative w-[800px] h-[750px]">
              {/* Main circular background */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/home-img/banner.png"
                  alt="Happy traveler"
                  width={800}
                  height={775}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
