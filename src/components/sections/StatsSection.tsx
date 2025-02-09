import { stats } from "@/data/mockData";

export default function StatsSection() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 flex items-center justify-center gap-4">
          <div>
            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="12"
                viewBox="0 0 31 12"
                fill="none"
              >
                <circle cx="24.5" cy="6" r="6" fill="#FF7F00" />
                <path d="M23.5 6H0" stroke="#FF7F00" />
              </svg>
              <h2 className="text-[42px] font-normal leading-[50.4px] text-black text-center font-poppins">
                Truth, Growth, and Excellence
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

            <p className="mt-2 text-[42px] font-normal leading-[50.4px] text-black text-center font-poppins">
              of our journey!
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-[4rem] right-0 -left-[18rem] w-[312px] h-[305px] bg-[#FF7F00]/20 blur-[98px] z-10"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-[55px] font-semibold leading-[66px] text-[#808080] text-center font-poppins">
                  {stat.label}
                </h3>
                <p className="mt-2 text-[19px] font-normal leading-[22.8px] text-[#808080]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
