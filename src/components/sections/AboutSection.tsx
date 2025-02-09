export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <div className="inline-flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="12"
              viewBox="0 0 31 12"
              fill="none"
            >
              <circle cx="24.75" cy="6" r="6" fill="#FF7F00" />
              <path d="M23.75 6H0.25" stroke="#FF7F00" />
            </svg>

            <button className="flex w-[200px] h-[51px] px-[18px] py-[14px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[25.5px] border border-black/50 text-black/70 text-[19px] font-medium leading-[120%]">
              About Triplanza
            </button>

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
                transform="matrix(-1 0 0 1 12.25 0)"
                fill="#FF7F00"
              />
              <path d="M7.25 6H30.75" stroke="#FF7F00" />
            </svg>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto text-3xl text-black">
            <h3>
              We&apos;re committed to making travel planning easy and enjoyable
              <span className="text-gray-500"> for every client.</span>
            </h3>

            <p className="text-gray-500">
              Our platform combines a sleek,
              <span className="text-black">
                minimalist design with advanced features{" "}
              </span>
              , ensuring
              <span className="text-gray-500"> a smooth and hassle-free</span>
              <span className="text-black">
                {" "}
                experience from start to finish.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
