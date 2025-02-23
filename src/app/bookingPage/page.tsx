"use client";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [selectedBatch, setSelectedBatch] = useState(0);
  const [expandedBatch, setExpandedBatch] = useState<number | null>(null);
  const [occupancy, setOccupancy] = useState({
    triple: 0,
    double: 0,
  });
  const [tickets, setTickets] = useState({
    adult: 0,
    child: 0,
  });

  const batches = [
    {
      dates: "20 Jun To 25 Jun",
      status: "Available",
      details: {
        startTime: "6:00 AM",
        duration: "6 Days",
        groupSize: "Max 15 people",
        includes: [
          "Hotel Accommodation",
          "Transportation",
          "Meals (Breakfast & Dinner)",
          "Guide Services",
        ],
      },
    },
    {
      dates: "27 Jun To 2 Jul",
      status: "Available",
      details: {
        startTime: "6:00 AM",
        duration: "6 Days",
        groupSize: "Max 15 people",
        includes: [
          "Hotel Accommodation",
          "Transportation",
          "Meals (Breakfast & Dinner)",
          "Guide Services",
        ],
      },
    },
    {
      dates: "4 Jul To 9 Jul",
      status: "Available",
      details: {
        startTime: "6:00 AM",
        duration: "6 Days",
        groupSize: "Max 15 people",
        includes: [
          "Hotel Accommodation",
          "Transportation",
          "Meals (Breakfast & Dinner)",
          "Guide Services",
        ],
      },
    },
  ];

  const handleBatchClick = (index: number) => {
    if (expandedBatch === index) {
      setExpandedBatch(null);
    } else {
      setExpandedBatch(index);
      setSelectedBatch(index);
    }
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-[#1C1C1C]">
            Batches Available
          </h2>
          <div className="space-y-3">
            {batches.map((batch, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div
                  className={`p-4 cursor-pointer flex justify-between items-center ${
                    selectedBatch === index
                      ? "border-orange-500 bg-orange-50 text-[#4E4E4E]"
                      : "border-gray-200 text-[#4E4E4E]"
                  }`}
                  onClick={() => handleBatchClick(index)}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`transform transition-transform ${
                        expandedBatch === index ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </div>
                    <div>{batch.dates}</div>
                  </div>
                  <div className="text-green-500">{batch.status}</div>
                </div>

                {expandedBatch === index && (
                  <div className="p-4 bg-gray-50 border-t">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Start Time</div>
                        <div className="font-medium text-[#1C1C1C]">
                          {batch.details.startTime}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-medium text-[#1C1C1C]">
                          {batch.details.duration}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Group Size</div>
                        <div className="font-medium text-[#1C1C1C]">
                          {batch.details.groupSize}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm text-gray-600 mb-2">
                        Includes:
                      </div>
                      <ul className="list-disc list-inside space-y-1 ">
                        {batch.details.includes.map((item, i) => (
                          <li key={i} className="text-sm text-[#1C1C1C]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-[#1C1C1C]">
            Occupancy
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#4E4E4E]">Triple Occupancy</span>
              <div className="flex items-center gap-4">
                <button
                  className="w-8 h-8 rounded-full border  text-[#4E4E4E]"
                  onClick={() =>
                    setOccupancy((prev) => ({
                      ...prev,
                      triple: Math.max(0, prev.triple - 1),
                    }))
                  }
                >
                  -
                </button>
                <span className=" text-[#4E4E4E]">{occupancy.triple}</span>
                <button
                  className="w-8 h-8 rounded-full border  text-[#4E4E4E]"
                  onClick={() =>
                    setOccupancy((prev) => ({
                      ...prev,
                      triple: prev.triple + 1,
                    }))
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-[#4E4E4E]">Double Occupancy</span>
              <div className="flex items-center gap-4">
                <button
                  className="w-8 h-8 rounded-full border  text-[#4E4E4E]"
                  onClick={() =>
                    setOccupancy((prev) => ({
                      ...prev,
                      double: Math.max(0, prev.double - 1),
                    }))
                  }
                >
                  -
                </button>
                <span className=" text-[#4E4E4E]">{occupancy.double}</span>
                <button
                  className="w-8 h-8 rounded-full border  text-[#4E4E4E]"
                  onClick={() =>
                    setOccupancy((prev) => ({
                      ...prev,
                      double: prev.double + 1,
                    }))
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-[#1C1C1C]">
            Select Your Tickets
          </h2>
          <div className="text-sm text-gray-500 mb-4">
            <p>• Free for kids under 5 and disabled visitors (75%+)</p>
            <p>
              • Pregnant women, families with strollers, and visitors on
              crutches can buy priority tickets at the venue
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-[#333]">Adult (18+)</div>
                <div className="text-orange-500">₹18000</div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="w-8 h-8 rounded-full border  text-[#4E4E4E]"
                  onClick={() =>
                    setTickets((prev) => ({
                      ...prev,
                      adult: Math.max(0, prev.adult - 1),
                    }))
                  }
                >
                  -
                </button>
                <span className=" text-[#4E4E4E]">{tickets.adult}</span>
                <button
                  className="w-8 h-8 rounded-full border  text-[#4E4E4E]"
                  onClick={() =>
                    setTickets((prev) => ({ ...prev, adult: prev.adult + 1 }))
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-[#333]">Child (6-17)</div>
                <div className="text-orange-500">₹2000</div>
                <div className="text-sm text-gray-500">
                  • With valid ID
                  <br />• Only in combination with Adult (18+)
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="w-8 h-8 rounded-full border  text-[#4E4E4E]"
                  onClick={() =>
                    setTickets((prev) => ({
                      ...prev,
                      child: Math.max(0, prev.child - 1),
                    }))
                  }
                >
                  -
                </button>
                <span className=" text-[#4E4E4E]">{tickets.child}</span>
                <button
                  className="w-8 h-8 rounded-full border  text-[#4E4E4E]"
                  onClick={() =>
                    setTickets((prev) => ({ ...prev, child: prev.child + 1 }))
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6 ">
          <div className="flex items-start gap-4 mb-6">
            <Image
              src="/icons/KEDARNATH.png"
              alt="Tour"
              width={96}
              height={96}
              className="rounded-lg object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-[#333]">
                Chardham Tour Package
              </h2>
              <div className="flex flex-col space-y-2 text-[#333] mt-4">
                <div className="flex items-center space-x-2 text-gray-500 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                  >
                    <path
                      d="M2.61914 7.65727H19.381M4.71438 3.4668H17.2858C17.8415 3.4668 18.3744 3.68754 18.7674 4.08048C19.1603 4.47341 19.381 5.00634 19.381 5.56204V18.1335C19.381 18.6892 19.1603 19.2221 18.7674 19.615C18.3744 20.008 17.8415 20.2287 17.2858 20.2287H4.71438C4.15869 20.2287 3.62575 20.008 3.23282 19.615C2.83989 19.2221 2.61914 18.6892 2.61914 18.1335V5.56204C2.61914 5.00634 2.83989 4.47341 3.23282 4.08048C3.62575 3.68754 4.15869 3.4668 4.71438 3.4668V3.4668Z"
                      stroke="#FA8B02"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.9998 12.895C11.5784 12.895 12.0474 12.426 12.0474 11.8474C12.0474 11.2688 11.5784 10.7998 10.9998 10.7998C10.4212 10.7998 9.95215 11.2688 9.95215 11.8474C9.95215 12.426 10.4212 12.895 10.9998 12.895Z"
                      fill="#FA8B02"
                    />
                  </svg>
                  <span>Fri, 23 DEC 2022</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                  >
                    <path
                      d="M10.9999 20.2287C6.37123 20.2287 2.61895 16.4764 2.61895 11.8477C2.61895 7.21908 6.37123 3.4668 10.9999 3.4668C15.6286 3.4668 19.3809 7.21908 19.3809 11.8477C19.3809 16.4764 15.6286 20.2287 10.9999 20.2287Z"
                      stroke="#FA8B02"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.0003 8.70508V12.8956H14.667"
                      stroke="#FA8B02"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>15:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-[#333]">2 Adult (18+)</span>
              <span className="text-[#333]">₹18000</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-[#333]">1 Child (6-17)</span>
              <span className="text-[#333]">₹2000</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-[#333]">Total Price</span>
              <span className="text-orange-500">₹20000</span>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Book Now
            </button>
          </div>
          <div className=" p-4 border rounded-xl shadow-md bg-white mt-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Coupons & Offer
            </h2>
            <div className="mt-3 p-3 bg-green-100 rounded-lg border border-green-300">
              <span className="bg-white px-3 py-1 text-green-600 text-sm rounded-md font-medium shadow">
                Save Upto 12000
              </span>
              <p className="mt-2 text-gray-900 font-semibold">
                Coupon Code - EARLY AXIS 12
              </p>
              <p className="text-gray-500 text-sm">
                Use code <span className="font-semibold">EARLY AXIS 12</span> &
                get upto 12000 off on this booking
              </p>
            </div>
            <button className="mt-4 w-full py-2 border rounded-md text-gray-700 font-medium hover:bg-gray-100 transition">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
