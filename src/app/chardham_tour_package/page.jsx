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

export default function ChardhamPackage() {
  const tabs = [
    { label: "Overview", content: <div>Welcome to the Overview tab</div> },
    { label: "Itinerary", content: <div>Welcome to the Home tab</div> },
    { label: "Inclusions", content: <div>About Us content goes here</div> },
    {
      label: "Things to Pack",
      content: <div>Our Services are listed here</div>,
    },
  ];

  const basicInfo = [
    { id: 1, icon: "⏳", details: "9 Nights / 10 days" },
    { id: 2, icon: "⏳", details: "Haridwar" },
    { id: 3, icon: "⏳", details: "Group Trip" },
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4 text-gray-600">
      <ImageSections />
      <div className="flex border-b mt-4 gap-6 text-black text-lg font-medium leading-[6]">
        <TabSwitch tabs={tabs} />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <h1 className="text-gray-800 text-3xl font-medium leading-[normal]">
            Chardham Yatra Package
          </h1>

          <div className="flex gap-2 mt-2 text-gray-500 text-sm border-b leading-[16.8px] font-normal">
            {basicInfo.map((el) => (
              <p
                key={el.id}
                className={`${
                  el.id === 0 || el.id === 1 ? "border-r pr-2" : ""
                }`}
              >
                {el.icon} {el.details}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8 mt-6">
            {services.map((service, index) => (
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
                  <h3 className="text-[20px] text-[#727272] font-medium leading-[120%]">
                    {service.name}
                  </h3>
                  <p className="text-[14px] text-[#808080] leading-[120%]">
                    {service.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-gray-700 text-3xl font-medium leading-normal mt-6">
            Overview
          </h2>

          <p className="text-gray-500 text-sm font-normal leading-[normal] mt-2">
            The Char Dham (lit. 'the small four abodes/seats' or 'the small
            circuit of four abodes/seats') is an important modern Hindu
            pilgrimage circuit in Uttarakhand, in the Indian Himalayas. Located
            in the Garhwal region of the state of Uttarakhand, the circuit
            consists of four sites—Gangotri, Yamunotri, Kedarnath, and
            Badrinath.
          </p>

          <div className=" mx-auto pr-6 pt-6">
            <h2 className="text-[#535353] text-xl font-medium font-[Poppins] mb-6">
              Where are the Chardhams Situated
            </h2>
            <div className="space-y-6">
              {dhams.map((dham, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    src={dham.image}
                    alt={dham.title}
                    className="w-20 h-20 rounded-lg object-cover"
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
            <div className="my-8">
              <h2 className="text-[#000] text-2xl font-medium leading-[38.4px]">
                Things To Pack
              </h2>

              <div className="grid grid-cols-2 gap-8 mt-6">
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
                      <h3 className="text-[20px] text-[#727272] font-medium leading-[120%]">
                        {service.name}
                      </h3>
                      <p className="text-[14px] text-[#808080] leading-[120%]">
                        {service.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto pr-6 py-6">
              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h2 className="text-black text-3xl font-medium leading-[38.4px] font-poppins">
                  Inclusions
                </h2>
                <ul className="mt-4 space-y-2">
                  {inclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-black text-lg leading-[22.8px] font-poppins"
                    >
                      <FaCheckCircle className="text-green-500 w-6 h-6" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-100 p-6 rounded-lg">
                <h2 className="text-black text-3xl font-medium leading-[38.4px] font-poppins">
                  Exclusions
                </h2>
                <ul className="mt-4 space-y-2">
                  {exclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-black text-lg leading-[22.8px] font-poppins"
                    >
                      <FaTimesCircle className="text-red-500 w-6 h-6" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full mx-auto">
              {items.map((item, index) => (
                <div key={index} className="border-b">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-4 text-left font-semibold"
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
        <div className="relative">
          <div className="sticky top-5">
            <div className="border rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center">
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
            <div className="border rounded-lg shadow-lg p-4">
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
            <div className="border rounded-lg shadow-lg p-4">
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
                  <div
                    key={index}
                    className="border-b py-2 flex justify-between items-center"
                  >
                    <span className="text-gray-700">20 Jun To 25 Jun</span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">
                      Available
                    </span>
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
