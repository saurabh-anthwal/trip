import { tourPackages } from '@/data/mockData';
import TourCard from '../ui/TourCard';

export default function PopularToursSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Explore Best Travel places</h2>
          <p className="mt-4 text-gray-600">Discover our most popular destinations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
