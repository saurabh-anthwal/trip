"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-orange-50 to-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-orange-600">
                Explore the world! ✈️
              </span>
            </div>

            <h1 className="text-5xl text-black lg:text-6xl font-bold leading-tight">
              Book With Us And
              <br />
              <span className="text-orange-500">Enjoy</span> Your
              <br />
              <span className="text-orange-500">Journey!</span>
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
            <div className="relative w-[500px] h-[500px]">
              {/* Main circular background */}
              <div className="absolute inset-0 bg-orange-500 rounded-full overflow-hidden">
                <Image
                  src="/home-img/poster-girl.png"
                  alt="Happy traveler"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute bottom-40 -left-10 bg-white text-black rounded-full shadow-lg px-4 py-2">
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

              <div className="absolute bottom-20 -right-10 bg-white text-black rounded-full shadow-lg px-4 py-2">
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

              <div className="absolute bottom-72 right-[-15%] bg-white text-black rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2">
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
                  <p className="text-orange-500 font-bold">5000+</p>
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
