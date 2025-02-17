import ImageSections from "@/components/detailsPageComponent/ImageSections";
import TabSwitch from "@/hooks/TabSwitch";

export default function ChardhamPackage() {
  const tabs = [
    { label: "Overview", content: <div>Welcome to the Overview tab</div> },
    { label: "Itinerary", content: <div>Welcome to the Home tab</div> },
    { label: "Inclusions", content: <div>About Us content goes here</div> },
    { label: "Things to Pack", content: <div>Our Services are listed here</div> },
  ];

  const basicInfo = [
    {id:1, icon:"⏳" , details:"9 Nights / 10 days"},
    {id:2, icon:"⏳" , details:"Haridwar"},
    {id:3, icon:"⏳" , details:"Group Trip"}
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 text-gray-600">
      {/* Hero Section */}
      <ImageSections />

      {/* Tabs */}
      <div className="flex border-b mt-4 gap-6 text-gray-600">
        <TabSwitch tabs={tabs} />
      </div>

      {/* Package Info */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="col-span-2">
          <h1 className="text-2xl">Chardham Yatra Package</h1>
          <div className="flex gap-2 mt-2 text-gray-500 text-sm border-b">
            {
              basicInfo.map((el)=>(
                <p key={el.id} className={`${el.id == 0 || el.id == 1 && "border-r pr-2"}`}>
                  {el.icon} {el.details}
                </p>
              ))
            }
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
