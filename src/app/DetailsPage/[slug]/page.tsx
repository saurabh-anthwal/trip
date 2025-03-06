"use client";
import React, { useState } from "react";
import ImageSections from "@/components/detailsPageComponent/ImageSections";
import TabSwitch from "@/hooks/TabSwitch";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import PackageCards from "@/components/detailsPageComponent/packageCards";
import ChardhamItinerary from "@/components/detailsPageComponent/ChardhamItinerary";
import { useRouter, useParams } from "next/navigation";
import { explorePlaces } from "@/data/explorePackage";
import { ImCross } from "react-icons/im";
export default function ChardhamPackage() {
  const router = useRouter();
  const params = useParams();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [accordion, setAccordion] = useState<number | null>(null);
  const slug = params.slug;

  const selectedPlace = explorePlaces.find(
    (place) => place.id === Number(slug)
  );

  if (!selectedPlace) {
    return <div className="text-center text-red-500">Package not found.</div>;
  }

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAccordionAvailable = (index: number) => {
    setAccordion(openIndex === index ? null : index);
  };

  const handleBooking = () => {
    router.push("/bookingPage");
  };

  return (
    <div className="container mx-auto py-20 text-gray-600">
      <ImageSections />
      <div className="flex mt-4 gap-3 sm:gap-6 text-base sm:text-lg font-medium leading-6 overflow-x-auto">
        <TabSwitch tabs={selectedPlace?.tabs} />
      </div>

      <div className="flex flex-col sm:flex-row gap-8 mt-6">
        <div className="col-span-2 w-full sm:w-[65%]">
          <div className="flex items-center gap-3 order-2 md:order-1 mb-4">
            <h1 className="text-[#323232] text-lg md:text-3xl font-medium leading-[normal] capitalize">
              {/* Chardham Yatra Package */}
              {selectedPlace?.title}
            </h1>
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 border hover:bg-gray-300 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="17.5"
                    fill="#EBEBEB"
                    stroke="#CDCDCD"
                  />
                  <path
                    d="M24 22.08C23.24 22.08 22.56 22.38 22.04 22.85L14.91 18.7C14.96 18.47 15 18.24 15 18C15 17.76 14.96 17.53 14.91 17.3L21.96 13.19C22.5 13.69 23.21 14 24 14C25.66 14 27 12.66 27 11C27 9.34 25.66 8 24 8C22.34 8 21 9.34 21 11C21 11.24 21.04 11.47 21.09 11.7L14.04 15.81C13.5 15.31 12.79 15 12 15C10.34 15 9 16.34 9 18C9 19.66 10.34 21 12 21C12.79 21 13.5 20.69 14.04 20.19L21.16 24.35C21.11 24.56 21.08 24.78 21.08 25C21.08 26.61 22.39 27.92 24 27.92C25.61 27.92 26.92 26.61 26.92 25C26.92 23.39 25.61 22.08 24 22.08Z"
                    fill="#4E4E4E"
                  />
                </svg>
              </button>
              <span className="text-[#4B4B4B] text-sm font-medium">Share</span>
            </div>
          </div>

          <div className="flex gap-2 mt-2 text-gray-500 text-sm pb-2 border-b leading-[16.8px] font-normal">
            {selectedPlace?.basicInfo.map((el, i) => (
              <div
                key={el.id}
                className={`flex items-center md:gap-4 gap-2 pb-1 ${
                  i === 0 || i === 1 ? "border-r-2 md:pr-2 pr-1" : ""
                }`}
              >
                <Image
                  src={el.icon}
                  alt="icon"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                <span className="text-xs">{el.details}</span>
              </div>
            ))}
          </div>

          <div className="flex w-full md:grid md:grid-cols-3 gap-8 mt-6 overflow-x-auto pb-4">
            {selectedPlace?.services.map((service, index) => {
              return (
                <div key={index} className="md:flex items-center gap-4 w-full">
                  <div className="md:bg-gray-100 md:p-2 md:rounded-full">
                    <div className="relative w-xl h-xl">
                      <Image
                        src={service.imgSrc}
                        alt={service.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs md:text-base text-[#727272] font-medium md:leading-[120%]">
                      {service.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#808080] leading-[120%] hidden sm:block">
                      {service.location}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2
            className="text-[#424242] text-3xl font-medium leading-normal mt-6 border-b background: rgba(0, 0, 0, 0.30);"
            id="overview"
          >
            Overview
          </h2>
          <h2 className="text-2xl text-[#535353] font-medium leading-[120%] mt-4">
            About {selectedPlace.package_name}
          </h2>

          <p className="text-[#808080] text-sm font-normal leading-[normal] mt-2">
            {`The Char Dham (lit. 'the small four abodes/seats' or 'the small
            circuit of four abodes/seats') is an important modern Hindu
            pilgrimage circuit in Uttarakhand, in the Indian Himalayas. Located
            in the Garhwal region of the state of Uttarakhand, the circuit
            consists of four sites—Gangotri, Yamunotri, Kedarnath, and
            Badrinath.`}
          </p>

          <div className="mx-auto pr-0 sm:pr-6 pt-6">
            <h2 className="text-black text-2xl font-medium font-[Poppins] mb-6">
              Where are the {selectedPlace.package_name} Situated
            </h2>
            <div className="space-y-6">
              {selectedPlace?.dhams.map((dham, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start sm:flex-row md:items-center sm:items-start justify-center sm:justify-start gap-2"
                >
                  <Image
                    src={dham.image}
                    alt={dham.title}
                    width={357}
                    height={141}
                    className="w-[357px] h-[141px] sm:w-20 sm:h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-[#535353] text-lg font-medium font-[Poppins]">
                      {dham.title}
                    </h3>
                    <p className="text-[#808080] text-sm font-[Poppins] leading-[120%]">
                      {dham.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div id="Itinerary">
              <ChardhamItinerary data={selectedPlace.itinerary} />
            </div>

            <div className="my-8" id="things-to-pack">
              <h2 className="border-b border-gray-300 text-[#000] text-3xl font-medium leading-[38.4px] pb-2 md:pb-2">
                Things To Pack
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 mt-6">
                {selectedPlace?.pack.map((service, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-full">
                      <Image
                        src={service.imgSrc}
                        alt={service.name}
                        width={25}
                        height={25}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="md:text-lg text-md text-[#727272] font-medium leading-[120%]">
                        {service.name}
                      </h3>
                      <p className="text-lg text-[#808080] leading-[120%]">
                        {/* {service?.location} */}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto pr-0 sm:pr-6 pt-6">
              <div className="bg-[#EBFFEE] p-6 rounded-lg mb-6" id="inclusions">
                <h2 className="text-black md:text-3xl text-2xl font-medium leading-[38.4px] font-poppins border-b border-[#808080]">
                  Inclusions
                </h2>
                <ul className="mt-4 space-y-2">
                  {selectedPlace?.inclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-black text-lg md:leading-[22.8px] font-poppins"
                    >
                      <FaCheckCircle className="text-green-500 md:w-6 md:h-6 flex-shrink-0" />
                      <span className="flex-1 md:text-lg text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#feeeee] p-6 rounded-lg">
                <h2 className="text-black md:text-3xl text-2xl font-medium leading-[38.4px] font-poppins border-b border-[#808080]">
                  Exclusions
                </h2>
                <ul className="mt-4 space-y-2">
                  {selectedPlace?.exclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-black text-lg leading-[22.8px] font-poppins"
                    >
                      <ImCross className="text-red-500 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="flex-1 md:text-lg text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-4xl  mt-5">
              {selectedPlace?.items.map((item, index: number) => (
                <div key={index} className="border-b">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-lg py-4 text-left text-black font-[500]"
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index &&
                    item.details.map((el, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 p-4 rounded-xl shadow-md mb-3"
                      >
                        <p className="text-gray-700 md:text-md text-xs md:font-medium">
                          {el}
                        </p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
            <PackageCards />
          </div>
        </div>

        <div className="relative order-2 md:order-1">
          <div className="sticky top-40">
            <div className="border rounded-lg shadow-lg p-4 my-3">
              <div className="flex justify-between items-center gap-3 order-1 md:order-2">
                <div className="flex items-center space-x-2">
                  <p className="line-through text-gray-400 text-sm font-medium">
                    ₹{selectedPlace.drop_price}
                  </p>

                  <h2 className="text-[#4B4B4B] text-3xl font-medium leading-normal">
                    ₹{selectedPlace.price}
                  </h2>
                  <span className="text-black text-sm font-normal leading-normal">
                    / Per Person
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <span className="text-black text-sm font-normal leading-normal">
                    4.5 (1,300)
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleBooking()}
                className="bg-[#FF7F00] text-white w-full py-2 mt-3 text-lg rounded-lg"
              >
                Send Query Here
              </button>
              <p className="text-gray-500 text-center text-sm font-semibold leading-normal mt-1">
                Limited Slots Available
              </p>
            </div>
            <div className="border rounded-lg shadow-lg p-4 my-3">
              <h3 className="text-gray-700 text-2xl font-medium leading-[28.8px]">
                Price Summary
              </h3>
              <div className="flex items-center space-x-3 mt-2 text-gray-700">
                <span className="font-semibold text-lg leading-[22.8px] text-gray-500">
                  Occupancy
                </span>
                <span className="text-[#FF7F00] text-sm  border-b border-[#FF7F00]">
                  Single
                </span>
                <span className="text-gray-500 text-sm">Double</span>
                <span className="text-gray-500 text-sm">Triple</span>
                <span className="text-gray-500 text-sm">Quad</span>
              </div>
              <div className="border border-[#808080] rounded-lg p-3 mt-3 flex justify-between items-center">
                <span className="text-gray-500 text-sm font-medium leading-[16.8px]">
                  Quad Occupancy
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg leading-[22.8px] text-gray-500">
                    ₹12500
                  </span>
                  <span className="text-gray-500 text-xs font-normal leading-[14.4px] text-center">
                    Per Person
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="border-[#FF7F00] border px-3 py-2 rounded-xl flex items-center justify-center gap-2 text-[#FF7F00] w-full">
                  <BsWhatsapp /> Whatsapp
                </button>
                <button className="border-[#FF7F00] border px-3 py-2 rounded-xl text-[#FF7F00] w-full flex items-center justify-center">
                  Get PDF Itinerary
                </button>
              </div>
            </div>
            <div className="border rounded-lg shadow-lg p-4 my-3">
              <h3 className="text-[#1C1C1C] text-xl font-semibold leading-[28.8px]">
                Batches Available
              </h3>

              <div className="flex gap-3 text-orange-500 text-sm mt-2">
                <span className="font-medium text-sm leading-[16.8px] text-black">
                  All
                </span>

                <span className="border-b-2 border-[#FF7F00] font-medium text-[14px] leading-[16.8px]">
                  Jun
                </span>

                <span className="font-medium text-sm leading-[16.8px] text-black">
                  Jul
                </span>
              </div>

              <div className="mt-3 space-y-2">
                {[1, 2].map((_, index) => (
                  <div key={index} className="border-b">
                    <button
                      className="w-full flex justify-between items-center py-2"
                      onClick={() => toggleAccordionAvailable(index)}
                    >
                      <span className="text-gray-700">20 Jun To 25 Jun</span>
                      <div className="flex items-center gap-2">
                        <span className="bg-[#CFF8D2] text-[#07D11E] px-2 py-1 rounded-2xl text-xs font-semibold">
                          Available
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`transition-transform duration-200 ${
                            accordion === index ? "rotate-180" : ""
                          }`}
                        >
                          <g clipPath="url(#clip0_1995_977)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.0599 16.0604C12.7787 16.3413 12.3974 16.4991 11.9999 16.4991C11.6024 16.4991 11.2212 16.3413 10.9399 16.0604L5.2819 10.4044C5.00064 10.123 4.84268 9.74138 4.84277 9.34352C4.84287 8.94567 5.00101 8.56414 5.2824 8.28288C5.56379 8.00162 5.9454 7.84366 6.34325 7.84375C6.74111 7.84384 7.12264 8.00198 7.4039 8.28338L11.9999 12.8794L16.5959 8.28338C16.8787 8.01 17.2575 7.85863 17.6508 7.86186C18.0441 7.86509 18.4204 8.02267 18.6986 8.30065C18.9769 8.57863 19.1348 8.95478 19.1384 9.34807C19.142 9.74137 18.991 10.1203 18.7179 10.4034L13.0609 16.0614L13.0599 16.0604Z"
                              fill="#FF7F00"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1995_977">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </button>
                    {accordion === index && (
                      <div className="p-2 text-gray-600 text-sm">
                        Additional details about availability.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
