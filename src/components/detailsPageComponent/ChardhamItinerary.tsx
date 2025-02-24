'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type ItineraryItem = {
  day: string;
  title: string;
};

const itinerary: ItineraryItem[] = [
  { day: 'Day 1', title: 'HARIDWAR to RANA CHATTI' },
  { day: 'Day 2', title: 'RANA CHATTI-YAMUNOTRI-RANA CHATTI' },
  { day: 'Day 3', title: 'RANA CHATTI TO UTTARKASHI' },
  { day: 'Day 4', title: 'UTTARKASHI-GANGOTRI-UTTARKASHI' },
  { day: 'Day 5', title: 'UTTARKASHI TO PHATA' },
  { day: 'Day 6', title: 'PHATA TO KEDARNATH' },
];

export default function Itinerary() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-4 mt-5" id='itinerary'>
      <h2 className="text-3xl font-medium mb-4">Itinerary</h2>
      <div className="border-t border-gray-300">
        {itinerary.map((item, index) => (
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
                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600">
                Morning after breakfast proceed to Sonprayag and start your 16km trek from Gaurikund to Kedarnath. Enjoy the beauty of the Himalayas.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}