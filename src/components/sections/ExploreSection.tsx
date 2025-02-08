'use client';

import { useState } from 'react';
import Image from 'next/image';
import { explorePlaces } from '@/data/mockData';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const categories = ['All', 'Lakes', 'Wildlife', 'Temples', 'Shopping', 'Viewpoints', 'Adventure'];

export default function ExploreSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const filteredPlaces = explorePlaces.filter((place) => {
    const matchesCategory = selectedCategory === 'All' || place.category === selectedCategory;
    const matchesSearch = place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 500); // Simulate loading
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Explore best travel places
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Discover trips that match your flexible lifestyle.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg hover:bg-orange-600'
                    : 'bg-white text-gray-600 hover:bg-orange-50 border-2 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="animate-pulse bg-white rounded-xl overflow-hidden shadow-lg">
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
              <p className="text-xl text-gray-600">No places found matching your criteria</p>
            </div>
          ) : (
            filteredPlaces.map((place) => (
              <div
                key={place.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {place.title}
                    </h3>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{place.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {place.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaClock className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{place.bestTime}</span>
                    </div>
                    <span className="text-orange-500 font-bold text-lg">
                      {place.price === 0 ? 'Free' : `₹${place.price}`}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
          
        </div>
        <div className="flex justify-end mt-12">
          <button className="bg-white text-black border-[1px] border-orange-500 px-8 py-3 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
