"use client";

import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { explorePlaces } from "@/data/explorePackage";
import Link from "next/link";
import { useRouter } from "next/navigation";

const categories = [
  "All Type",
  "CHAR DHAM YATRA",
  "DO DHAM YATRA",
  "CHARDHAM YATRA BY HELICOPTER",
  "DO DHAM YATRA BY HELICOPTER",
  "KEDARNATH YATRA",
  "KEKDHAM YATRA BY HELICOPTER"
];

export default function ExploreSection() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("All Type");
  const [searchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredPlaces = explorePlaces.filter((place) => {
    const matchesCategory =
      selectedCategory === "All Type" || place.title === selectedCategory;
    const matchesSearch =
      place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 500); // Simulate loading
  };

  const handleDetails = (id:number)=>{
    router.push(`/detailsPage/${id}`)
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-8">
        <div className="flex items-center space-x-4 mx-auto justify-center">
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
          <h2 className="text-lg md:text-4xl text-gray-900">
            Explore best travel places
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

        <p className="text-center text-xl text-black/50 max-w-2xl mx-auto  w-8/12 md:w-auto">
          Discover trips that match your flexible lifestyle.
        </p>
      </div>

      {/* Search and Filter */}
      <div
        className="flex md:flex-wrap md:justify-center px-2 w-full mx-auto overflow-x-auto mb-4 gap-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          maxWidth: "100%", // Ensure it doesn't break layout
          whiteSpace: "nowrap", // Prevent wrapping
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`md:px-10 md:py-3 md:text-md px-4 py-2 text-xs rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-orange-500 text-white shadow-lg hover:bg-orange-600"
                : "bg-gray-200 text-gray-500 hover:bg-gray-100 hover:border-none border-2 border-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Places Grid */}
      <div
        className="flex md:flex-wrap md:justify-center px-2 w-full overflow-x-auto  gap-6 bg-white"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {isLoading ? (
          Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="animate-pulse bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            </div>
          ))
        ) : filteredPlaces.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-600">
              No places found matching your criteria
            </p>
          </div>
        ) : (
          filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="cursor-pointer group min-w-[85%] md:min-w-[25%] rounded-3xl border border-gray-300 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
              onClick={()=>handleDetails(place?.id)}
            >
              <div className="relative h-[189px] md:h-[273px] overflow-hidden">
                <Image
                  src="/home-img/kedarnath.png"
                  alt={place.title}
                  fill
                  className="object-cover rounded-3xl transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="md:p-4 p-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="md:text-2xl text-xl text-gray-700 group-hover:text-orange-500 transition-colors">
                    {place.title}
                  </h3>
                </div>
                <div className="flex gap-[10px] items-center">
                  <div className="flex items-center text-[#808080] text-sm mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      className="w-4 h-4 mr-2"
                    >
                      <g clipPath="url(#clip0_361_1189)">
                        <path
                          d="M14.7863 6.63264C14.7863 10.4898 9.00056 14.9898 9.00056 14.9898C9.00056 14.9898 3.21484 10.4898 3.21484 6.63264C3.21484 3.48135 5.84927 0.846924 9.00056 0.846924C12.1518 0.846924 14.7863 3.48135 14.7863 6.63264Z"
                          stroke="#FF7F00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.99888 8.56124C10.064 8.56124 10.9275 7.6978 10.9275 6.63267C10.9275 5.56755 10.064 4.7041 8.99888 4.7041C7.93376 4.7041 7.07031 5.56755 7.07031 6.63267C7.07031 7.6978 7.93376 8.56124 8.99888 8.56124Z"
                          stroke="#FF7F00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.242 13.0613H15.4283L17.3569 17.5613H0.642578L2.57115 13.0613H3.75748"
                          stroke="#FF7F00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_361_1189">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0 0.204102)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-[#808080]">{place.location}</span>
                  </div>

                  <div className="flex items-center text-[#808080] text-sm mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      className="w-4 h-4 mr-2"
                    >
                      <circle cx="6.5" cy="5.7041" r="2.5" fill="#FF7F00" />
                      <ellipse
                        cx="9.83285"
                        cy="2.09357"
                        rx="0.397962"
                        ry="0.825304"
                        transform="rotate(39.6291 9.83285 2.09357)"
                        fill="#FF7F00"
                      />
                      <ellipse
                        cx="6.41162"
                        cy="1.03587"
                        rx="0.397962"
                        ry="0.825304"
                        transform="rotate(0.946317 6.41162 1.03587)"
                        fill="#FF7F00"
                      />
                      <ellipse
                        cx="3.0796"
                        cy="2.34857"
                        rx="0.397962"
                        ry="0.825304"
                        transform="rotate(-37.7364 3.0796 2.34857)"
                        fill="#FF7F00"
                      />
                      <ellipse
                        cx="1.299"
                        cy="5.45589"
                        rx="0.397962"
                        ry="0.825304"
                        transform="rotate(-76.4192 1.299 5.45589)"
                        fill="#FF7F00"
                      />
                      <ellipse
                        cx="2.91642"
                        cy="8.9145"
                        rx="0.397962"
                        ry="0.825304"
                        transform="rotate(-115.102 2.91642 8.9145)"
                        fill="#FF7F00"
                      />
                      <rect
                        x="2"
                        y="15.1909"
                        width="20"
                        height="1"
                        rx="0.5"
                        transform="rotate(-44.3744 2 15.1909)"
                        fill="#FF7F00"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.9689 13.1731C16.8155 13.1936 16.659 13.2042 16.5 13.2042C14.567 13.2042 13 11.6372 13 9.70422C13 9.54523 13.0106 9.38872 13.0311 9.23535C11.3198 9.46446 10 10.9302 10 12.7042C10 14.6372 11.567 16.2042 13.5 16.2042C15.274 16.2042 16.7398 14.8844 16.9689 13.1731Z"
                        fill="#FF7F00"
                      />
                      <path
                        d="M16.5 9.2041L16.6123 9.54959H16.9755L16.6816 9.76312L16.7939 10.1086L16.5 9.89508L16.2061 10.1086L16.3184 9.76312L16.0245 9.54959H16.3877L16.5 9.2041Z"
                        fill="#FF7F00"
                      />
                      <path
                        d="M15.5 7.2041L15.6123 7.54959H15.9755L15.6816 7.76312L15.7939 8.10861L15.5 7.89508L15.2061 8.10861L15.3184 7.76312L15.0245 7.54959H15.3877L15.5 7.2041Z"
                        fill="#FF7F00"
                      />
                    </svg>
                    <span className="text-[#808080]">{place.days}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-orange-500">
                  {/* SVG Icon */}
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
                      d="M3.8 3.8291C3.8 5.69306 5.28865 7.2041 7.125 7.2041C8.96135 7.2041 10.45 5.69306 10.45 3.8291C10.45 1.96514 8.96135 0.454102 7.125 0.454102C5.28865 0.454102 3.8 1.96514 3.8 3.8291ZM4.94 3.8291C4.94 5.05399 5.91826 6.04696 7.125 6.04696C8.33174 6.04696 9.31 5.05399 9.31 3.8291C9.31 2.60421 8.33174 1.61124 7.125 1.61124C5.91826 1.61124 4.94 2.60421 4.94 3.8291Z"
                      fill="#FF7F00"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.8 9.13267C1.76503 9.13267 0.103662 10.7563 0.00466633 12.797C0.00156689 12.8608 -9.53674e-7 12.9251 -9.53674e-7 12.9898V13.9541H14.25V12.9898C14.25 12.9251 14.2484 12.8608 14.2453 12.797C14.1463 10.7563 12.485 9.13267 10.45 9.13267H3.8ZM13.1033 12.797C13.0059 11.3958 11.8552 10.2898 10.45 10.2898H3.8C2.39481 10.2898 1.2441 11.3958 1.14668 12.797H13.1033Z"
                      fill="#FF7F00"
                    />
                  </svg>

                  {/* Text */}
                  <span className="text-sm font-medium text-[#808080] mb-1">
                    Total Person {place.person}
                  </span>
                </div>

                {/* <p className="text-gray-600 mb-4 mt-2 line-clamp-2 text-sm">
                    {place.description}
                  </p> */}
                {/* <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaClock className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{place.bestTime}</span>
                    </div>
                    <span className="text-orange-500 font-bold text-lg">
                      {place.price === 0 ? "Free" : `₹${place.price}`}
                    </span>
                  </div> */}

                <div className="flex items-end justify-between w-full">
                  <div>
                    <p className="text-gray-600 font-poppins text-lg leading-[22.8px] my-2">
                      Starts From
                    </p>
                    <p className="text-black font-poppins text-lg font-semibold leading-[22.8px]">
                      ₹{place.price}
                      <span className="text-gray-500 font-poppins text-lg font-normal leading-[22.8px]">
                        /Person
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-1 text-orange-500">
                    {/* Show only on hover */}
                    <div className="border border-black rounded-full p-1 block group-hover:hidden">
                      <p className="h-2 w-2 rounded-full bg-[#FF7F00]"></p>
                    </div>

                    {/* Default icon (hidden on hover) */}
                    <div className="border hover:border-none rounded-full p-2 bg-orange-500 text-gray-800 hidden group-hover:block">
                      <FaArrowRightLong />
                    </div>
                    <Link
                      href="/bookingPage"
                      className="text-sm md:text-lg font-normal leading-[22.8px] text-orange-500 font-poppins"
                    >
                      Requ
                      <span className="border-b border-orange-500 transition-all duration-700 hover:border-transparent">
                        est a call
                      </span>
                    </Link>
                  </div>
                </div>
                <p className="text-gray-300 text-sm font-extralight">
                  <del>₹{place.drop_price}</del>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-end mt-12  max-w-6xl mx-auto px-3">
        <button className="bg-white text-black border-[1px] border-orange-500 px-10 py-3 rounded-full hover:bg-orange-600 hover:text-white transition-colors text-lg md:text-[20px]">
          Explore More
        </button>
      </div>
    </section>
  );
}
