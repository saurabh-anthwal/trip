import Image from 'next/image';
import { TourPackage } from '@/types';
import { StarIcon } from '@heroicons/react/20/solid';

interface TourCardProps {
  tour: TourPackage;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{tour.title}</h3>
        <p className="text-gray-600">{tour.location}</p>
        <div className="flex items-center mt-2">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="ml-1 text-sm">{tour.rating}</span>
          <span className="ml-1 text-sm text-gray-500">({tour.reviews} reviews)</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">₹{tour.price}</span>
          <span className="text-sm text-gray-500">{tour.duration}</span>
        </div>
      </div>
    </div>
  );
}
