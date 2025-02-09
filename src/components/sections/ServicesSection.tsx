import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      
      <div className="flex flex-col items-center px-6 pt-10">
        <div className="flex items-center space-x-4 mx-auto justify-center my-8">
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
          <h2 className="text-4xl font-bold text-gray-900">
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
        <h2 className="text-[19px] text-black/50 text-center font-normal leading-[22.8px] mb-6">
          Find Trip that fits a Flexible lifestyle
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="relative w-[600px] h-[577px] rounded-xl overflow-hidden">
            <Image
              src="/home-img/Badrinath_temple.png"
              alt="Main Image"
              layout="fill"
            />
            <div className="absolute top-[-4px] left-[-20px] bg-[#F9F9F9] shadow-lg rounded-[21px] border border-[#808080] flex items-center px-4 py-2 z-50 w-[234px] h-[84px]">
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

                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="absolute top-[50%] left-[60%] bg-white shadow-lg rounded-lg flex items-center px-4 py-2">
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
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="absolute bottom-[0px] right-[0px] bg-white shadow-lg rounded-lg flex items-center px-4 py-2">
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
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          <div className="w-[466px]">
            {[
              { number: 1, title: "Find Trip That Fit a flexible lifestyle" },
              { number: 2, title: "Travel with more confidence" },
              { number: 3, title: "See what’s really included" },
            ].map((item) => (
              <div key={item.number} className="my-7">
                <span className="bg-[#FF7F00] text-white w-[52px] h-[22px] flex items-center justify-center rounded-[9px] font-semibold text-sm">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-[32px] font-normal leading-[38.4px] text-black font-[Poppins] mb-3">
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
