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
    <section className="max-w-7xl mx-auto py-10 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-normal leading-tight md:leading-snug text-black text-center font-poppins">
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

      <div
        className="flex md:flex-wrap md:justify-center px-2 w-full overflow-x-auto  gap-6 bg-white"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {monthlyPlaces.map((place: Place) => (
          <div
            key={place.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 min-w-60 md:w-[22%] hover:bg-orange-500 p-0 snap-center hover:scale-105 hover:-translate-x-2"
          >
            <div className="relative h-full w-full hover:pb-6 hover:pr-4">
              <Image
                src={place.image}
                alt={place.title}
                width={285}
                height={374}
                className="object-cover rounded-xl w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 top-1 p-4 text-white text-center">
                <div className="flex items-center text-sm justify-center">
                  <span className="text-white text-center font-poppins text-base leading-8">
                    {place.location}
                  </span>
                </div>
                <h3 className="text-white text-center font-poppins text-2xl font-semibold leading-8 mb-1">
                  {place.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
