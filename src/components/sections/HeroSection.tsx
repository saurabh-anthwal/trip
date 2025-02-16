"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-orange-50 to-white h-auto md:pt-20">
      <div className="px-4  md:ml-40 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row  justify-between">
          {/* Left Content */}
          <div className="lg:w-full space-y-6 pt-[100px]">
            <div className="inline-flex items-center md:bg-white px-8 py-3 gap-2 rounded-full shadow-[0px_844.164px_236.681px_rgba(0,0,0,0),0px_540.422px_215.972px_rgba(0,0,0,0.01),0px_303.741px_182.442px_rgba(0,0,0,0.04),0px_135.106px_135.106px_rgba(0,0,0,0.06),0px_33.53px_73.963px_rgba(0,0,0,0.07)]">
              <span className="text-sm font-semibold text-[#FF7F00] leading-[120%] font-poppins">
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

            <h1 className="md:text-7xl text-4xl text-black font-poppins font-semibold md:leading-[86.4px] leading-[50px]">
              Book With Us
              <br /> And <span className="text-[#FF7F00]"> Enjoy</span> Your
              <br />
              <span className="text-[#FF7F00]">Trip!</span>
            </h1>

            <p className="text-gray-600 text-md md:text-xl">
              Where adventure meets comfort. We create unforgettable travel{" "}
              <br />
              experiences{" "}
            </p>

            <div className="flex flex-row md:justify-start justify-start">
              <button className="bg-[#FF7F00] md:text-xl text-white px-8 py-3 md:px-10 md:py-4 rounded-full hover:bg-orange-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Content - Image with Floating Elements */}
          <div className="w-full relative md:mt-10 lg:mt-0">
            <div className="relative h-[350px] md:h-[500px] mt-20">
              {/* Main circular background */}
              <div className="absolute">
                <Image
                  src="/home-img/image.png"
                  alt="Happy traveler"
                  width={1000}
                  height={900}
                  // className="w-full h-full"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute md:bottom-[6rem] md:left-[0rem] bottom-32 bg-white text-black text-xs md:text-lg rounded-full shadow-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.39551 9.89649C1.39551 6.35106 1.39551 4.57835 2.24035 3.30151C2.61762 2.73134 3.10591 2.24305 3.67608 1.86578C4.95292 1.02094 6.72563 1.02094 10.2711 1.02094C13.8165 1.02094 15.5892 1.02094 16.866 1.86578C17.4362 2.24305 17.9245 2.73134 18.3018 3.30151C19.1466 4.57835 19.1466 6.35106 19.1466 9.89649C19.1466 13.4419 19.1466 15.2146 18.3018 16.4915C17.9245 17.0616 17.4362 17.5499 16.866 17.9272C15.5892 18.772 13.8165 18.772 10.2711 18.772C6.72563 18.772 4.95292 18.772 3.67608 17.9272C3.10591 17.5499 2.61762 17.0616 2.24035 16.4915C1.39551 15.2146 1.39551 13.4419 1.39551 9.89649ZM14.8647 9.89668C14.8647 12.4344 12.8074 14.4917 10.2697 14.4917C7.73196 14.4917 5.67472 12.4344 5.67472 9.89668C5.67472 7.35894 7.73196 5.3017 10.2697 5.3017C12.8074 5.3017 14.8647 7.35894 14.8647 9.89668ZM10.2697 12.9371C11.9488 12.9371 13.3101 11.5758 13.3101 9.89668C13.3101 8.21753 11.9488 6.85631 10.2697 6.85631C8.59055 6.85631 7.22932 8.21753 7.22932 9.89668C7.22932 11.5758 8.59055 12.9371 10.2697 12.9371ZM15.0458 6.15118C15.6423 6.15118 16.1258 5.66764 16.1258 5.07116C16.1258 4.47469 15.6423 3.99115 15.0458 3.99115C14.4494 3.99115 13.9658 4.47469 13.9658 5.07116C13.9658 5.66764 14.4494 6.15118 15.0458 6.15118Z"
                        fill="#FF7F00"
                      />
                    </svg>
                  </span>
                  <span>736K Followers</span>
                </div>
              </div>

              <div className="absolute md:bottom-[3rem] md:right-[8rem] bottom-24 right-4 bg-white text-black text-xs md:text-lg rounded-full shadow-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="20"
                      viewBox="0 0 12 20"
                      fill="none"
                    >
                      <path
                        d="M7.77019 18.772V10.6749H10.6249L11.0522 7.51932H7.77011V5.5046C7.77011 4.59098 8.03655 3.96839 9.4127 3.96839L11.1678 3.96761V1.14526C10.8642 1.10688 9.82232 1.02094 8.61033 1.02094C6.07979 1.02094 4.34734 2.49149 4.34734 5.19217V7.51932H1.48535V10.6749H4.34734V18.772H7.77019V18.772Z"
                        fill="#FF7F00"
                      />
                    </svg>
                  </span>
                  <span>204K Followers</span>
                </div>
              </div>

              <div className="absolute md:top-[17rem] md:right-[8%] top-28 right-[-10px] bg-white text-black rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2">
                {/* Full SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <g clipPath="url(#clip0_361_917)">
                    <path
                      d="M11.105 7.46832C10.4411 7.48168 9.80418 7.72822 9.31036 8.16302C8.81654 8.59782 8.4987 9.19191 8.41478 9.83702C8.33087 10.4821 8.48646 11.1353 8.8532 11.6774C9.21994 12.2196 9.7734 12.6146 10.4127 12.7906V20.3502C10.4127 20.53 10.4857 20.7025 10.6155 20.8296C10.7453 20.9568 10.9214 21.0282 11.105 21.0282C11.2887 21.0282 11.4648 20.9568 11.5946 20.8296C11.7244 20.7025 11.7974 20.53 11.7974 20.3502V12.7906C12.4367 12.6146 12.9901 12.2196 13.3569 11.6774C13.7236 11.1353 13.8792 10.4821 13.7953 9.83702C13.7114 9.19191 13.3935 8.59782 12.8997 8.16302C12.4059 7.72822 11.769 7.48168 11.105 7.46832Z"
                      fill="#FF7F00"
                    />
                    <path
                      d="M16.0894 4.55268C15.9491 4.46046 15.7793 4.42163 15.6118 4.44352C15.4444 4.46541 15.2909 4.5465 15.1803 4.67152C15.0696 4.79653 15.0095 4.95685 15.0111 5.12228C15.0128 5.28771 15.0762 5.44682 15.1894 5.56967C15.864 6.14247 16.405 6.85057 16.7758 7.64601C17.1466 8.44144 17.3385 9.30563 17.3385 10.18C17.3385 11.0544 17.1466 11.9186 16.7758 12.714C16.405 13.5095 15.864 14.2176 15.1894 14.7904C15.1079 14.8439 15.0391 14.9138 14.9873 14.9954C14.9355 15.0769 14.902 15.1684 14.889 15.2636C14.8761 15.3588 14.8839 15.4556 14.912 15.5476C14.9401 15.6396 14.9879 15.7247 15.0521 15.7973C15.1163 15.8699 15.1956 15.9283 15.2846 15.9686C15.3736 16.0089 15.4704 16.0303 15.5684 16.0312C15.6665 16.0322 15.7637 16.0127 15.8535 15.9741C15.9433 15.9355 16.0237 15.8787 16.0894 15.8074Z"
                      fill="#FF7F00"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_361_917">
                      <rect
                        width="22.1545"
                        height="21.6958"
                        fill="white"
                        transform="translate(0.0273438 0.654297)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {/* Text Content */}
                <div>
                  <p className="text-orange-500 font-bold text-xs md:text-lg">
                    5000+
                  </p>
                  <p className="text-gray-500 text-xs md:text-lg">Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
