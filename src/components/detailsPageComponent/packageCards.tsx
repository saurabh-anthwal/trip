import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const packages = [
  {
    id: 1,
    image: "/home-img/kedarnath.png",
    title: "Kedarnath Package 2025 | Haridwar",
    location: "Delhi",
    duration: "11N/12D",
    persons: 1,
    price: 12500,
    oldPrice: 18500,
  },
  {
    id: 2,
    image: "/home-img/haridwar.png",
    title: "Kedarnath Package 2025 | Haridwar",
    location: "Delhi",
    duration: "11N/12D",
    persons: 1,
    price: 12500,
  },
  {
    id: 3,
    image: "/home-img/kedarnath.png",
    title: "Kedarnath Package 2025 | Haridwar",
    location: "Delhi",
    duration: "11N/12D",
    persons: 1,
    price: 12500,
  },
];

const PackageCards = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">You might Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden border p-3"
          >
            <Image
              src={pkg.image}
              alt={pkg.title}
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-48"
            />
            <div className="p-3">
              <h3 className="font-semibold text-lg">{pkg.title}</h3>
              <div className="flex items-center text-sm text-gray-600 gap-2 mt-2">
                <FaMapMarkerAlt className="text-orange-500" /> {pkg.location}
                <MdOutlineWbSunny className="text-yellow-500" /> {pkg.duration}
              </div>
              <div className="flex items-center text-sm text-gray-600 gap-2 mt-1">
                <FaUser className="text-orange-500" /> Total Person{" "}
                {pkg.persons}
              </div>
              <div className="flex justify-between items-center mt-3">
                <div>
                  <p className="text-gray-600 text-sm">Starts From</p>
                  <p className="text-lg font-bold">
                    ₹{pkg.price}{" "}
                    <span className="text-sm text-gray-500 line-through">
                      ₹{pkg.oldPrice}
                    </span>
                    /Person
                  </p>
                </div>
                <button className="text-orange-500 font-semibold text-sm">
                  Request A Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCards;
