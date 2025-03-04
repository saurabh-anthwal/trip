'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function ChardhamItinerary({data}:any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-4 mt-5" id="itinerary">
      <h2 className="text-3xl font-medium mb-4 text-[#5F5C5C]">Itinerary</h2>
      <div className="border-t border-gray-300">
        {data &&
          data.map((item:any, index:any) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-800"
              >
                <span className="bg-orange-500 bg-opacity-20 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                  {item.day}
                </span>

                <span className="ml-3 flex-1 text-[#5F5C5C] font-medium">{item.title}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600">
                  {item.description.map((el: string, id: number) => (
                    <p key={id} className="bg-gray-50 mb-2 p-2">
                      {el}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
