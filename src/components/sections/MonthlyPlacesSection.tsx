import Image from "next/image";
import { monthlyPlaces } from "@/data/mockData";

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
        <div className="text-center mb-12 mx-auto flex flex-col">
          <div className="flex items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="12"
              viewBox="0 0 31 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#FF7F00" />
              <path d="M7 6H30.5" stroke="#FF7F00" />
            </svg>
            <h2 className="text-[42px] font-normal text-black text-center leading-[50.4px]">
              Best Places by the month
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="12"
              viewBox="0 0 31 12"
              fill="none"
            >
              <circle
                cx="6"
                cy="6"
                r="6"
                transform="matrix(-1 0 0 1 12 0)"
                fill="#FF7F00"
              />
              <path d="M7 6H30.5" stroke="#FF7F00" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {monthlyPlaces.map((place: Place) => (
            <div
              key={place.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow w-[285px] h-[374px] p-0"
            >
              <div className="relative h-64">
                <Image
                  src={place.image}
                  alt={place.title}
                  width={285}
                  height={374}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0  bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 top-1 p-4 text-white text-center">
                  <div className="flex items-center text-sm justify-center">
                    <span className="text-white text-center font-puppies text-[16.8px] leading-[32.2px]">
                      {place.location}
                    </span>
                  </div>
                  <h3 className="text-white text-center font-poppins text-[26.8px] font-semibold leading-[32.2px] mb-1">
                    {place.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
