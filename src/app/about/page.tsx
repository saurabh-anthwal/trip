import React from "react";
import Image from "next/image";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Chanda Bhatt",
      position: "Co-founder",
      image: "/about/team.png",
    },
    {
      id: 2,
      name: "Nitin Chauhan",
      position: "Head of Sales and Marketing",
      image: "/about/team.png",
    },
    {
      id: 3,
      name: "Sonali Bhatt",
      position: "Head of Operations",
      image: "/about/team.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-8">
      <div className="relative h-[350px] md:h-[460px] mb-12">
        <Image
          src="/home-img/river-rafting-rishikesh.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col rounded-lg">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            About Us.{" "}
          </h2>

          <p className="text-sm md:text-lg text-white text-center max-w-4xl mt-1">
            At Triplanza Private Limited, we are more than just a travel
            company; we are your gateway to unforgettable adventures, spiritual
            journeys, and thrilling experiences. Founded by Suraj Bhatt,
            Triplanza has emerged as one of the leading travel companies,
            dedicated to crafting seamless and enriching travel experiences for
            our customers. Whether you&apos;re seeking the serenity of holy
            places, the adrenaline rush of adventure sports, or the joy of
            exploring new destinations, we are here to make your dreams come
            true.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[#323232]">
            Company Overview
          </h2>
          <p className="text-[#747474] text-lg text-justify">
            Triplanza Private Limited is a dynamic and innovative travel company
            that specializes in curating personalized travel experiences for
            individuals, families, and groups. With a strong presence across
            various locations worldwide, we are committed to delivering
            exceptional service, unmatched hospitality, and unforgettable
            memories. From spiritual pilgrimages like the Chardham Yatra in
            Uttarakhand to adrenaline-pumping activities like paragliding,
            bungee jumping, and river rafting, we offer a diverse range of
            travel options to cater to every traveler&apos;s needs.
          </p>
        </div>
        <div className="relative h-[500px]">
          <Image
            src="/about/about.png"
            alt="Company team"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#FF7F00]">
          Who We Are
        </h2>
        <p className="text-gray-600 text-center max-w-7xl mx-auto">
          We are a team of passionate travelers, adventure enthusiasts, and
          travel experts who believe that every journey should <br /> be
          extraordinary. At Triplanza, we understand that travel is not just
          about visiting new places; it&apos;s about creating <br /> memories,
          discovering yourself, and experiencing the world in its purest form.
        </p>
        <p className="text-gray-600 text-center max-w-7xl mx-auto mt-3">
          Our team is dedicated to ensuring that every trip you take with us is
          filled with excitement, comfort, and joy. From <br /> meticulously
          planned itineraries to round-the-clock customer support, we go the
          extra mile to make your travel dreams <br /> a reality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-4 border border-[#C2C2C2]">
          <div className="p-6">
            <h3 className="text-4xl font-bold text-[#FF7F00]">Vision</h3>
            <p className="text-[#686868] text-lg">
              Our vision is to redefine the way people travel by offering
              immersive, authentic, and thrilling experiences that leave a
              lasting impact. We aspire to be the most trusted and preferred
              travel partner for explorers, adventurers, and spiritual seekers
              worldwide.
            </p>
          </div>
          <div className="relative h-[347px] mb-4">
            <Image
              src="/about/vision.png"
              alt="Vision"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-4 border border-[#C2C2C2]">
          <div className="relative h-[200px] mb-4">
            <Image
              src="/about/mission.png"
              alt="Mission"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-[#FF7F00]">Mission</h3>
            <p className="text-[#686868] text-lg">
              Our mission is to provide exceptional travel solutions that
              seamlessly blend affordability, quality, and innovation. We strive
              to deliver hassle-free travel experiences while promoting
              sustainable and responsible tourism. Our diverse range of unique
              travel packages caters to various interests, ensuring that every
              journey is memorable. Through group travel opportunities, we
              foster a strong sense of community, bringing like-minded travelers
              together. Committed to continuous innovation, we adapt to the
              evolving needs of our customers, making every trip not just a
              journey, but an experience to cherish.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center bg-white shadow-md rounded-lg  border border-[#C2C2C2]">
        <div className="p-6">
          <h3 className="text-3xl font-bold text-orange-600 mb-4">Goals</h3>
          <p className="text-gray-700">
            Our goal is to inspire and empower people to explore the world,
            embrace new cultures, and embark on life-changing adventures. We
            aspire to become a global leader in the travel industry by offering
            innovative and diverse travel solutions that cater to every
            traveler&rsquo;s needs. By fostering a community of passionate
            explorers, we create meaningful connections through shared
            experiences. We emphasize spiritual and adventure tourism as
            powerful avenues for personal growth and transformation. Committed
            to excellence, we continuously strive to exceed customer
            expectations by delivering exceptional service and unforgettable
            journeys.
          </p>
        </div>
        <div className="relative h-96 w-full">
          <Image
            src="/about/goals.png"
            alt="Goals"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="my-12">
        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center md:justify-between relative overflow-hidden text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-[#5F5C5C] mb-6 md:mb-0">
            Meet <br /> Our <br /> Founder
          </h2>
          <div className="relative">
            <div className="relative w-60 h-80 md:w-72 md:h-96 mx-auto">
              <Image
                src="/about/founder.png"
                alt="Founder"
                fill
                className="object-cover rounded-lg drop-shadow-lg"
              />
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 md:left-auto md:right-2 flex flex-col items-center md:items-end">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                Suraj Bhatt
              </span>
              <span className="text-black text-sm">CEO, Founder</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">
          Say Hi To Our Core Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="border rounded-lg p-6 text-center shadow-md"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 border-4 border-orange-500 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium text-lg inline-block mb-2">
                {member.name}
              </span>
              <p className="text-black text-lg">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-left mb-8 text-black">
          Why Choose Triplanza
        </h2>
        <div className="text-[#666] space-y-4 mx-auto leading-relaxed">
          <p>
            <strong className="text-[#666]">Holy Places Packages</strong> :
            Embark on a spiritual journey with our specially curated packages
            like the Chardham Yatra in Uttarakhand. Experience the divine energy
            of sacred destinations and reconnect with your inner self.
          </p>
          <p>
            <strong className="text-[#666]">Community Group Departures</strong>{" "}
            : Travel with like-minded individuals and enjoy cost-effective group
            tours that make exploring the world more accessible and enjoyable.
          </p>
          <p>
            <strong className="text-[#666]">Global Presence</strong> : With a
            growing network of destinations worldwide, we bring the world closer
            to you.
          </p>
          <p>
            <strong className="text-[#666]">Thrilling Activities</strong> : From
            paragliding over breathtaking landscapes to bungee jumping and river
            rafting, we offer a wide range of adventure activities to satisfy
            your thirst for excitement.
          </p>
          <p>
            <strong className="text-[#666]">Personalized Service</strong> : We
            tailor our services to meet your unique needs, ensuring that every
            trip is as special as you are.
          </p>
          <p>
            At Triplanza, we don&apos;t just plan trips; we create stories,
            build connections, and inspire adventures. Let us be your partner in
            exploring the world, one thrilling journey at a time. Welcome to
            Triplanza – where every journey is an experience of a lifetime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
