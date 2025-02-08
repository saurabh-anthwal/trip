"use client"
import { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/mockData';
import { StarIcon } from '@heroicons/react/20/solid';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">See What Travelers Are Saying</h2>
        </div>

        <div className="w-fullflex justify-between items-center">
          <div className="flex-1 p-6 rounded-lg shadow-md bg-white">
            <p className="text-gray-600">{testimonials[currentIndex].comment}</p>
            <h4 className="font-semibold mt-4">{testimonials[currentIndex].name}</h4>
            <div className="flex">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="relative w-1/3 h-1/3 rounded-full overflow-hidden">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={handlePrev} className="bg-gray-300 p-2 rounded">Previous</button>
          <button onClick={handleNext} className="bg-gray-300 p-2 rounded">Next</button>
        </div>
      </div>
      </div>
    </section>
  );
}
