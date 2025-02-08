export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <div className="inline-flex items-center space-x-2">
            <div className="h-1 w-8 bg-orange-500 rounded"></div>
            <button className="text-xl font-medium text-gray-500 border-[1px] rounded-full px-4 py-2">About Triplanza</button>
            <div className="h-1 w-8 bg-orange-500 rounded"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto text-3xl text-black">
            <h3>
              We&apos;re committed to making travel planning easy and enjoyable
              <span className="text-gray-500"> for every client.</span>
            </h3>
            
            <p className="text-gray-500">
              Our platform combines a sleek,
              <span className="text-black">minimalist design with advanced features </span>,
              ensuring
              <span className="text-gray-500"> a smooth and hassle-free</span>
              <span className="text-black"> experience from start to finish.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
