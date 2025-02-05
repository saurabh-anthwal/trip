export default function AboutSection() {
  return (
    <section className="py-20  bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <div className="inline-flex items-center space-x-2">
            <div className="h-1 w-8 bg-orange-500 rounded"></div>
            <h2 className="text-xl font-medium text-gray-800">About Triplanza</h2>
            <div className="h-1 w-8 bg-orange-500 rounded"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-6 text-gray-800">
            <h3 className="text-3xl">
              We&apos;re committed to making travel planning easy and enjoyable{" "}
              <span className="text-gray-500">for every client.</span>
            </h3>
            
            <p className="text-3xl text-black">
              Our platform combines a sleek,{" "}
              <span className="">minimalist design with advanced features</span>,
              ensuring{" "}
              <span className="text-gray-500">a smooth and hassle-free</span>{" "}
              <span className="">experience from start to finish.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
