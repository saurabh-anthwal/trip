"use client";

import Image from "next/image";

const packages = [
  {
    id: 1,
    image: "/home-img/kedarnath.png",
    title: "Kedarnath Package 2025 | Haridwar",
    location: "Delhi",
    duration: "11N/12D",
    group: "Group of 15",
    date: "24 Feb",
    price: 12500,
  },
  {
    id: 2,
    image: "/home-img/haridwar.png",
    title: "Kedarnath Package 2025 | Haridwar",
    location: "Delhi",
    duration: "11N/12D",
    group: "Total Person 1",
    date: "24 Feb",
    price: 12500,
  },
  {
    id: 3,
    image: "/home-img/badrinath.png",
    title: "Kedarnath Package 2025 | Haridwar",
    location: "Delhi",
    duration: "11N/12D",
    group: "Total Person 1",
    date: "24 Feb",
    price: 12500,
  },
];

export default function GroupTripDestinations() {
  return (
    <div className="bg-white">
      <div className="text-center mb-12 flex items-center justify-center gap-4 pt-6">
        <div>
          <div className="flex items-center justify-center gap-4">
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
            <h2 className="text-3xl md:text-4xl font-normal leading-tight md:leading-snug text-black text-center font-poppins">
              Best Travel Destinations
            </h2>

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
                transform="matrix(-1 0 0 1 12 0)"
                fill="#FF7F00"
              />
              <path d="M7 6H30.5" stroke="#FF7F00" />
            </svg>
          </div>

          <p className="text-3xl md:text-4xl font-normal leading-tight md:leading-snug text-black text-center font-poppins">
            for Group Trips
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6 flex-wrap p-6 bg-white">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden  border"
          >
            <Image
              src={pkg.image}
              alt={pkg.title}
              width={385}
              height={273}
              className="rounded-xl object-cover w-full h-[273px]"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900">
                {pkg.title}
              </h3>
              <div className="flex items-center gap-2 my-2 text-sm text-gray-600 mt-2">
                <span className="w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_361_1607)">
                      <path
                        d="M14.7863 6.42829C14.7863 10.2854 9.00056 14.7854 9.00056 14.7854C9.00056 14.7854 3.21484 10.2854 3.21484 6.42829C3.21484 3.27701 5.84927 0.642578 9.00056 0.642578C12.1518 0.642578 14.7863 3.27701 14.7863 6.42829Z"
                        stroke="#FF7F00"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.99888 8.35714C10.064 8.35714 10.9275 7.4937 10.9275 6.42857C10.9275 5.36345 10.064 4.5 8.99888 4.5C7.93376 4.5 7.07031 5.36345 7.07031 6.42857C7.07031 7.4937 7.93376 8.35714 8.99888 8.35714Z"
                        stroke="#FF7F00"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.242 12.8569H15.4283L17.3569 17.3569H0.642578L2.57115 12.8569H3.75748"
                        stroke="#FF7F00"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_361_1607">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="text-sm md:text-base font-normal leading-snug text-gray-500 font-poppins">
                  {pkg.location}
                </span>

                <span className="w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <circle cx="6.5" cy="5.5" r="2.5" fill="#FF7F00" />
                    <ellipse
                      cx="9.83285"
                      cy="1.88947"
                      rx="0.397962"
                      ry="0.825304"
                      transform="rotate(39.6291 9.83285 1.88947)"
                      fill="#FF7F00"
                    />
                    <ellipse
                      cx="6.41162"
                      cy="0.831764"
                      rx="0.397962"
                      ry="0.825304"
                      transform="rotate(0.946317 6.41162 0.831764)"
                      fill="#FF7F00"
                    />
                    <ellipse
                      cx="3.0796"
                      cy="2.14447"
                      rx="0.397962"
                      ry="0.825304"
                      transform="rotate(-37.7364 3.0796 2.14447)"
                      fill="#FF7F00"
                    />
                    <ellipse
                      cx="1.299"
                      cy="5.25178"
                      rx="0.397962"
                      ry="0.825304"
                      transform="rotate(-76.4192 1.299 5.25178)"
                      fill="#FF7F00"
                    />
                    <ellipse
                      cx="2.91642"
                      cy="8.7104"
                      rx="0.397962"
                      ry="0.825304"
                      transform="rotate(-115.102 2.91642 8.7104)"
                      fill="#FF7F00"
                    />
                    <rect
                      x="2"
                      y="14.9868"
                      width="20"
                      height="1"
                      rx="0.5"
                      transform="rotate(-44.3744 2 14.9868)"
                      fill="#FF7F00"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.9689 12.969C16.8155 12.9895 16.659 13.0001 16.5 13.0001C14.567 13.0001 13 11.4331 13 9.50012C13 9.34113 13.0106 9.18462 13.0311 9.03125C11.3198 9.26036 10 10.7261 10 12.5001C10 14.4331 11.567 16.0001 13.5 16.0001C15.274 16.0001 16.7398 14.6803 16.9689 12.969Z"
                      fill="#FF7F00"
                    />
                    <path
                      d="M16.5 9L16.6123 9.34549H16.9755L16.6816 9.55902L16.7939 9.90451L16.5 9.69098L16.2061 9.90451L16.3184 9.55902L16.0245 9.34549H16.3877L16.5 9Z"
                      fill="#FF7F00"
                    />
                    <path
                      d="M15.5 7L15.6123 7.34549H15.9755L15.6816 7.55902L15.7939 7.90451L15.5 7.69098L15.2061 7.90451L15.3184 7.55902L15.0245 7.34549H15.3877L15.5 7Z"
                      fill="#FF7F00"
                    />
                  </svg>
                </span>
                <span className="text-sm md:text-base font-normal leading-snug text-gray-500 font-poppins">
                  {pkg.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.8 3.625C3.8 5.48896 5.28865 7 7.125 7C8.96135 7 10.45 5.48896 10.45 3.625C10.45 1.76104 8.96135 0.25 7.125 0.25C5.28865 0.25 3.8 1.76104 3.8 3.625ZM4.94 3.625C4.94 4.84989 5.91826 5.84286 7.125 5.84286C8.33174 5.84286 9.31 4.84989 9.31 3.625C9.31 2.40011 8.33174 1.40714 7.125 1.40714C5.91826 1.40714 4.94 2.40011 4.94 3.625Z"
                    fill="#FF7F00"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.8 8.92857C1.76503 8.92857 0.103662 10.5522 0.00466633 12.5929C0.00156689 12.6567 -9.53674e-07 12.721 -9.53674e-07 12.7857V13.75H14.25V12.7857C14.25 12.721 14.2484 12.6567 14.2453 12.5929C14.1463 10.5522 12.485 8.92857 10.45 8.92857H3.8ZM13.1033 12.5929C13.0059 11.1917 11.8552 10.0857 10.45 10.0857H3.8C2.39481 10.0857 1.2441 11.1917 1.14668 12.5929H13.1033Z"
                    fill="#FF7F00"
                  />
                </svg>
                <span className="text-sm md:text-base font-normal leading-snug text-gray-500 font-poppins">
                  {pkg.group}
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-base md:text-lg text-[rgba(12,17,31,0.60)] font-poppins font-normal leading-snug mt-4 my-2">
                    Starts From
                  </p>

                  <p className="text-[19px] font-semibold leading-[22.8px] text-[#050505] font-poppins">
                    ₹{pkg.price}
                    <span className="text-[19px] font-normal text-[#808080]">
                      /Person
                    </span>
                  </p>
                </div>
                <div className="w-[39px] h-[70px] flex-shrink-0 rounded-[15px] bg-[#D9D9D9] text-center flex items-center justify-center flex-col">
                  <p className="text-[19px] font-normal leading-[22.8px] text-black font-poppins">
                    {pkg.date.split(" ")[0]}
                  </p>
                  <p className="text-[14px] font-normal leading-[16.8px] text-black font-poppins">
                    {pkg.date.split(" ")[1]}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-[#FF7F00] text-[19px] font-normal leading-[22.8px] font-poppins cursor-pointer text-right">
                ∘ Request A Call
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-12 max-w-7xl mx-auto px-4">
        <button className="bg-white text-black border-[1px] border-orange-500 px-10 text-xl py-3 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
          Explore More
        </button>
      </div>
    </div>
  );
}
