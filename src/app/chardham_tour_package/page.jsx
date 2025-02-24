"use client";
import React, { useState } from "react";
import ImageSections from "@/components/detailsPageComponent/ImageSections";
import TabSwitch from "@/hooks/TabSwitch";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import PackageCards from "@/components/detailsPageComponent/packageCards";
import ChardhamItinerary from "@/components/detailsPageComponent/ChardhamItinerary";
import Link from "next/link";

export default function ChardhamPackage() {
  const tabs = [
    { label: "Overview", link: "#overview" },
    { label: "Itinerary", link: "#itinerary" },
    { label: "Inclusions", link: "#inclusions" },
    { label: "Things to Pack", link: "#things-to-pack" },
  ];

  const basicInfo = [
    { id: 1, icon: "/icons/duration.png", details: "9 Nights / 10 days" },
    { id: 2, icon: "/icons/location.png", details: "Haridwar" },
    { id: 3, icon: "/icons/Bag.png", details: "Group Trip" },
  ];

  const services = [
    { name: "Stay", imgSrc: "/icons/stay.png", location: "Haridwar" },
    { name: "Transfers", imgSrc: "/icons/transport.png", location: "Haridwar" },
    { name: "Trekking", imgSrc: "/icons/Trekking.png", location: "Haridwar" },
    { name: "Bonfire", imgSrc: "/icons/Bonfire.png", location: "Haridwar" },
    { name: "Meals", imgSrc: "/icons/Meals.png", location: "Haridwar" },
    {
      name: "Explorations",
      imgSrc: "/icons/explorations.png",
      location: "Haridwar",
    },
  ];

  const pack = [
    {
      name: "Good quality Rucksack ",
      imgSrc: "/icons/solar_bag-bold.png",
    },
    {
      name: "Pair Shoes",
      imgSrc: "/icons/Shoes.png",
    },
    {
      name: "Heavy down jacket",
      imgSrc: "/icons/game-icons_life-jacket.png",
    },
    {
      name: "Personal medication",
      imgSrc: "/icons/mdi_medicine.png",
    },
    {
      name: "Personal Care",
      imgSrc: "/icons/material-symbols_personal-bag.png",
    },
    {
      name: "Personal Documents",
      imgSrc: "/icons/solar_documents-bold.png",
    },
  ];

  const dhams = [
    {
      title: "YAMUNOTRI DHAM",
      description:
        "Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level, Yamunotri Dham is situated at a 190 km distance from Dehradun and 230 km away from Haridwar.",
      image: "/icons/YAMUNOTRI.png",
    },
    {
      title: "GANGOTRI DHAM",
      description:
        "Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 240 km away from Dehradun.",
      image: "/icons/GANGOTRI.png",
    },
    {
      title: "KEDARNATH DHAM",
      description:
        "Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
      image: "/icons/KEDARNATH.png",
    },
    {
      title: "BADRINATH DHAM",
      description:
        "Badrinath or Badrinarayana Temple is a Hindu temple dedicated to Vishnu. It is situated in the town of Badrinath in Uttarakhand, India.",
      image: "/icons/BADRINATH.png",
    },
  ];

  const inclusions = [
    "Every Night 1 Water Bottle For Drinking",
    "Medical Kit And Oxygen Cylinder In Emergency",
    "Accommodation in 3 Star Deluxe Hotels In Every Destination Besides Kedarnath",
    "In Kedarnath Basic Category Will Be Provided And Both Male-female Will Be In Separate Room",
    "Breakfast And Dinner",
    "In Kedarnath Limited Food Will Be Provided",
    "Transportation From Haridwar To Sonprayag And Sonprayag To Haridwar Is Included",
    "Transportation - Tempo Traveler, Innova, Dzire",
    "Sightseeing On Every Day",
    "Professional Tour Leader During Your Yatra And 24×7 Ground Support",
    "Forest Permit And Yatra Registration",
    "Toll, Taxes, Parking And Driver Allowance",
  ];

  const exclusions = [
    "Get 5% Applicable Extra On Billing",
    "On First Day En-route Haridwar To Rano Chatti Breakfast And Lunch Is Not Included And On Last Day En-route Helang To Haridwar Lunch And Dinner Is Not Included In This Package",
    "Any Personal Expenses Like : Photography /Videography Charges And Any Kind Of Activities On The Trip.",
    "Any Arising Of Cost Due To Natural Calamities Like : Landslide, Road Block Or Etc. ( To Be Borne By Customer On The Spot )",
    "Anything Not Mentioned In Inclusion Will Consider Exclusion",
    "In Kedarnath Limited Food Will Be Provided",
    "Any Damage To The Hotel And Vehicle Will Be Borne By The Client",
    "Expenses Caused By Factors Beyond Our Control Like : Railway And Flight Delays Or Political Disturbances Etc.",
    "Offloading Paid By The CustomerPer Bag/Per Day Inr 100/- Will Be",
  ];

  const items = [
    "Things You Should Know About",
    "Term & Condition",
    "Cancellation Policies",
    "Refund Policies",
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [accordion, setAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAccordionAvailable = (index) => {
    setAccordion(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4 text-gray-600">
      <ImageSections />
      <div className="flex mt-4 gap-3 sm:gap-6 text-base sm:text-lg font-medium leading-6 overflow-x-auto">
        <TabSwitch tabs={tabs} />
      </div>

      <div className="flex flex-col sm:flex-row gap-8 mt-6">

        <div className="col-span-2 w-full sm:w-[65%] ">
          <div className="flex items-center gap-3 order-2 md:order-1">
            <h1 className="text-gray-800 text-lg md:text-3xl font-medium leading-[normal]">
              Chardham Yatra Package
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

          <div className="flex gap-2 mt-2 text-gray-500 text-sm pb-4 border-b leading-[16.8px] font-normal">
            {basicInfo.map((el) => (
              <div
                key={el.id}
                className={`flex items-center gap-3 ${
                  el.id === 0 || el.id === 1 ? "border-r pr-2" : ""
                }`}
              >
                <Image
                  src={el.icon}
                  alt="icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span>{el.details}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-row sm:grid sm:grid-cols-2 gap-8 mt-6 overflow-x-auto pb-2">
            {services.map((service, index) => {
              return (
                <div key={index} className="flex items-center gap-4 w-full">
                  <div className="bg-white md:bg-gray-100 p-2 sm:p-3 rounded-full">
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={service.imgSrc}
                        alt={service.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-[20px] text-[#727272] font-medium leading-[120%]">
                      {service.name}
                    </h3>
                    <p className="text-sm sm:text-sm text-[#808080] leading-[120%] hidden sm:block">
                      {service.location}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2
            className="text-gray-700 text-3xl font-medium leading-normal mt-6 border-b background: rgba(0, 0, 0, 0.30);"
            id="overview"
          >
            Overview
          </h2>
          <h2 className="text-2xl text-gray-600 font-medium leading-[120%] mt-4">
            About Chardham
          </h2>

          <p className="text-gray-500 text-sm font-normal leading-[normal] mt-2">
            The Char Dham (lit. 'the small four abodes/seats' or 'the small
            circuit of four abodes/seats') is an important modern Hindu
            pilgrimage circuit in Uttarakhand, in the Indian Himalayas. Located
            in the Garhwal region of the state of Uttarakhand, the circuit
            consists of four sites—Gangotri, Yamunotri, Kedarnath, and
            Badrinath.
          </p>

          <div className="mx-auto pr-0 sm:pr-6 pt-6">
            <h2 className="text-black text-2xl font-medium font-[Poppins] mb-6">
              Where are the Chardhams Situated
            </h2>
            <div className="space-y-6">
              {dhams.map((dham, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start sm:flex-row md:items-center sm:items-start justify-center sm:justify-start space-x-4"
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
              <ChardhamItinerary />
            </div>

            <div className="my-8" id="things-to-pack">
              <h2 className="text-[#000] text-3xl font-medium leading-[38.4px]">
                Things To Pack
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                {pack.map((service, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Image
                        src={service.imgSrc}
                        alt={service.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg text-[#727272] font-medium leading-[120%]">
                        {service.name}
                      </h3>
                      <p className="text-lg text-[#808080] leading-[120%]">
                        {service.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto pr-0 sm:pr-6 pt-6">
              <div className="bg-green-100 p-6 rounded-lg mb-6" id="inclusions">
                <h2 className="text-black text-3xl font-medium leading-[38.4px] font-poppins border-b border-[#808080]">
                  Inclusions
                </h2>
                <ul className="mt-4 space-y-2">
                  {inclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-black text-lg leading-[22.8px] font-poppins"
                    >
                      <FaCheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-100 p-6 rounded-lg">
                <h2 className="text-black text-3xl font-medium leading-[38.4px] font-poppins border-b border-[#808080]">
                  Exclusions
                </h2>
                <ul className="mt-4 space-y-2">
                  {exclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-black text-lg leading-[22.8px] font-poppins"
                    >
                      <FaTimesCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-4xl  mt-5">
              {items.map((item, index) => (
                <div key={index} className="border-b">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-4 text-left text-black font-[500]"
                  >
                    {item}
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="p-4 text-gray-600">
                      This is the content for {item}.
                    </div>
                  )}
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
                    ₹12500
                  </p>

                  <h2 className="text-gray-700 text-3xl font-medium leading-normal">
                    ₹12500
                  </h2>
                  <span className="text-black text-sm font-normal leading-normal">
                    / Per Person
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <span className="text-black text-sm font-normal leading-normal">
                    4.5 (1,300)
                  </span>
                </div>
              </div>
              <button className="bg-[#FF7F00] text-white w-full py-2 mt-3 text-lg rounded-lg">
                Send Query Here
              </button>
              <p className="text-gray-500 text-center text-sm font-semibold leading-normal mt-1">
                Limited Slots Available
              </p>
            </div>
            <div className="border rounded-lg shadow-lg p-4 my-3">
              <h3 className="text-gray-700 text-xl font-medium leading-[28.8px]">
                Price Summary
              </h3>
              <div className="flex items-center space-x-3 mt-2 text-gray-700">
                <span className="font-semibold text-lg leading-[22.8px] text-gray-500">
                  Room Sharing:
                </span>
                <span className="text-gray-500 text-sm">Single</span>
                <span className="text-gray-500 text-sm">Double</span>
                <span className="text-gray-500 text-sm">Triple</span>
                <span className="text-orange-500 text-sm font-semibold">
                  Quad
                </span>
              </div>
              <div className="border rounded-lg p-3 mt-3 flex justify-between items-center">
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
                <button className="border px-3 py-2 rounded flex items-center gap-2 text-orange-500 w-full">
                  <BsWhatsapp /> Whatsapp
                </button>
                <button className="border px-3 py-2 rounded text-orange-500 w-full">
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
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">
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
