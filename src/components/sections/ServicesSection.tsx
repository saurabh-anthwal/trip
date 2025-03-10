import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="pb-4 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col items-center px-6 pt-10">
        <div className="flex items-center space-x-4 mx-auto justify-center my-2 md:my-8">
          {/* Left SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="12"
            viewBox="0 0 31 12"
            fill="none"
          >
            <circle cx="24.5" cy="6" r="6" fill="#FF7F00" />
            <path d="M23.5 6H0" stroke="#FF7F00" />
          </svg>

          {/* Heading */}
          <h2 className="md:text-4xl text-lg text-gray-900">
            What Services We Provide
          </h2>

          {/* Right SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="12"
            viewBox="0 0 31 12"
            fill="none"
          >
            <circle
              cx="6"
              cy="6"
              r="6"
              transform="matrix(-1 0 0 1 12.5 0)"
              fill="#FF7F00"
            />
            <path d="M7.5 6H31" stroke="#FF7F00" />
          </svg>
        </div>
        <h2 className="text-[19px] text-black/50 text-center font-normal leading-[22.8px] mb-4">
          Find Trip that fits a Flexible lifestyle
        </h2>

        <div className="flex flex-col md:flex-row w-full justify-center max-w-7xl items-start gap-12">
          <div className="relative w-full h-[327px] sm:h-[577px] rounded-xl overflow-hidden">
            <Image
              src="/home-img/Badrinath_temple.png"
              alt="Main Image"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 bg-[#F9F9F9] shadow-lg rounded-xl border border-[#808080] flex items-center px-1 py-2 z-50 w-[50%] max-w-[234px] sm:w-[234px]">
              <Image
                src="/home-img/Badrinath_temple.png"
                alt="Kedarnath"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="ml-2">
                <p className="text-[14px] font-normal text-black leading-[16.8px]">
                  Kedarnath
                </p>
                <p className="text-xs sm:text-lg">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="absolute top-[50%] right-0 transform -translate-y-1/2 bg-white shadow-lg rounded-lg flex items-center px-1 py-2 w-[50%] max-w-[200px] sm:w-[200px]">
              <Image
                src="/home-img/badrinath-temple-rain.png"
                alt="Badrinath"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="ml-2">
                <p className="text-[14px] font-normal text-black leading-[16.8px]">
                  Badrinath
                </p>
                <p className="text-xs sm:text-lg">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="absolute bottom-[5%] right-0 bg-white shadow-lg rounded-lg flex items-center px-1 py-2 w-[50%] max-w-[200px] sm:w-[200px]">
              <Image
                src="/home-img/Kedarnath_Temple.png"
                alt="Gangotri"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="ml-2">
                <p className="text-[14px] font-normal text-black leading-[16.8px]">
                  Gangotri
                </p>
                <p className="text-xs sm:text-lg">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>

          <div className="mt-4 w-full">
            {[
              { number: 1, title: "Find Trip That Fit a flexible lifestyle" },
              { number: 2, title: "Travel with more confidence" },
              { number: 3, title: "See what’s really included" },
            ].map((item) => (
              <div key={item.number} className="mb-7">
                <span className="bg-[#FF7F00] text-white w-[52px] h-[22px] flex items-center justify-center rounded-[9px] font-semibold text-sm">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-lg md:text-3xl font-normal leading-snug text-black font-poppins my-2">
                    {item.title}
                  </h3>

                  <p className="text-[14px] font-normal leading-[16.8px] text-black font-[Poppins]">
                    <span className="text-black/50 font-normal">
                      {" "}
                      Our platform combines a sleek,
                    </span>
                    minimalist design with advanced features,
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
