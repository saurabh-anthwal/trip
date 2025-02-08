import Image from 'next/image';
import { monthlyPlaces } from '@/data/mockData';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface Place {
  id: number;
  image: string;
  title: string;
  location: string;
}

export default function MonthlyPlacesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Best Places by the month</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the perfect destinations for every season
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {monthlyPlaces.map((place: Place) => (
            <div
              key={place.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{place.title}</h3>
                  <div className="flex items-center text-sm">
                    <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                    <span>{place.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
