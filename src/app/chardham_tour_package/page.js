import Image from "next/image";

export default function ChardhamPackage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Image src="/images/kedarnath.jpg" alt="Kedarnath" width={800} height={500} className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[200px] bg-gray-300 rounded-lg"></div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-[150px] bg-gray-300 rounded-lg"></div>
            <div className="h-[150px] bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-sm">See All</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mt-4 gap-6 text-gray-600">
        <button className="pb-2 border-b-2 border-black font-medium">Overview</button>
        <button>Itinerary</button>
        <button>Inclusions</button>
        <button>Things to Pack</button>
      </div>

      {/* Package Info */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="col-span-2">
          <h1 className="text-2xl font-bold">Chardham Yatra Package</h1>
          <div className="flex gap-2 mt-2 text-gray-500 text-sm">
            <span>⏳ 9 Nights / 10 days</span>
            <span>📍 Haridwar</span>
            <span>🚐 Group Trip</span>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-3 gap-4 mt-6 text-gray-700">
            <div className="flex items-center gap-2">🏨 Stay</div>
            <div className="flex items-center gap-2">🚖 Transfers</div>
            <div className="flex items-center gap-2">🥾 Trekking</div>
            <div className="flex items-center gap-2">🔥 Bonfire</div>
            <div className="flex items-center gap-2">🍽️ Meals</div>
            <div className="flex items-center gap-2">🌍 Explorations</div>
          </div>

          {/* Overview Section */}
          <h2 className="text-xl font-semibold mt-6">Overview</h2>
          <p className="text-gray-600 mt-2">
            The Chardham consists of four sacred sites—Gangotri, Yamunotri, Kedarnath, and Badrinath...
          </p>
        </div>

        {/* Right Content */}
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">₹12500 / Per Person</h2>
          <button className="bg-orange-500 text-white w-full py-2 mt-3 rounded-lg">Send Query Here</button>
          <p className="text-gray-500 text-sm mt-1">Limited Slots Available</p>

          <h3 className="text-lg font-semibold mt-4">Price Summary</h3>
          <p className="text-gray-700">Quad Occupancy: ₹12500</p>
          <div className="flex gap-2 mt-2">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded">WhatsApp</button>
            <button className="border px-3 py-1 rounded">Get PDF Itinerary</button>
          </div>

          {/* Batches Available */}
          <h3 className="text-lg font-semibold mt-4">Batches Available</h3>
          <div className="mt-2">
            <p className="text-blue-500">20 Jun To 25 Jun <span className="text-green-500">Available</span></p>
            <p className="text-blue-500">20 Jun To 25 Jun <span className="text-green-500">Available</span></p>
            <p className="text-blue-500">20 Jun To 25 Jun <span className="text-green-500">Available</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
