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
              <h2 className="text-lg md:text-4xl font-normal leading-snug md:leading-[50.4px] text-black text-center font-poppins">
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

            <p className="mt-2 text-lg md:text-4xl font-normal leading-snug md:leading-[50.4px] text-black text-center font-poppins">
              of our journey!
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-[4rem] right-0 -left-[18rem] w-[312px] h-[305px] bg-[#FF7F00]/20 blur-[98px] z-10"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-5 md:px-0 relative z-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-start py-10 ${
                  index < 3 ? "md:border-r-2 md:border-gray-500" : ""
                } 
                ${
                  index == 0 || index == 2 ? "border-r-2 border-gray-500" : ""
                }`}
              >
                <div className="text-2xl md:text-5xl flex gap-4 items-center justify-start font-semibold leading-snug md:leading-[66px] text-gray-500 text-center font-poppins">
                  <h3>{stat.label}</h3>
                  <div className="p-2 rounded-full border border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                    >
                      <path
                        d="M8.20711 0.496994C7.81658 0.10647 7.18342 0.10647 6.79289 0.496994L0.428932 6.86096C0.0384078 7.25148 0.0384078 7.88465 0.428932 8.27517C0.819457 8.66569 1.45262 8.66569 1.84315 8.27517L7.5 2.61831L13.1569 8.27517C13.5474 8.66569 14.1805 8.66569 14.5711 8.27517C14.9616 7.88465 14.9616 7.25148 14.5711 6.86096L8.20711 0.496994ZM8.5 19.2041L8.5 1.2041H6.5L6.5 19.2041H8.5Z"
                        fill="#FF7F00"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-base md:text-lg font-normal leading-snug text-gray-500">
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
