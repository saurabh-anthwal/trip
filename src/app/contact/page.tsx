"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
// import { Mail, Phone, MapPin, Calendar, User, ChevronDown } from "lucide-react"
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiCalendarLine, RiUserLine, RiArrowDownSLine } from "react-icons/ri";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tripType: "",
    destination: "",
    query: "",
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-28 text-gray-800">
      <div className="flex justify-start mb-8">
        <button className="px-6 py-2 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-50 transition-colors">
          Let&apos;s Talk !
        </button>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Your next adventure is only a phone call away!
          </h1>
        </div>
        <div>
          <p className="text-gray-600">
            Got questions, travel tips, or a memorable adventure to share? We&apos;re all ears! At JustWravel, it&apos;s
            not just about booking trips - it&apos;s about crafting unforgettable experiences. Let&apos;s dive into the
            conversation!
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-16">
        <Image
          src="/blog/blog_2.png"
          alt="Group of friends hiking in mountains"
          width={1200}
          height={400}
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Contact Info */}
        <div className="md:col-span-1">
          <p className="text-gray-500 mb-1">Connect with us</p>
          <h2 className="text-3xl font-bold mb-2">Contact us</h2>
          <p className="text-gray-500 text-sm mb-8">We&apos;re here to help - Reach out anytime</p>

          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              S
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <RiMailLine className="w-5 h-5 mt-1 text-gray-500" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-500 text-sm">official.tripianxa@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <RiPhoneLine className="w-5 h-5 mt-1 text-gray-500" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-500 text-sm">+91 9760417744</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <RiMapPinLine className="w-5 h-5 mt-1 text-gray-500" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-500 text-sm">Aamwala, Dehradun, Uttarakhand - 248001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 uppercase mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Shreeyash"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 uppercase mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Mane"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs text-gray-500 uppercase mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Maneshree1920@gmail.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs text-gray-500 uppercase mb-1">What kind of trip do you prefer?</label>
              <div className="relative">
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                >
                  <option value="">Select an Category</option>
                  <option value="adventure">Adventure</option>
                  <option value="cultural">Cultural</option>
                  <option value="relaxation">Relaxation</option>
                </select>
                <RiArrowDownSLine className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs text-gray-500 uppercase mb-1">Where do you want to go?</label>
              <div className="relative">
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                >
                  <option value="">Select an Location</option>
                  <option value="kedarnath">Kedarnath</option>
                  <option value="haridwar">Haridwar</option>
                  <option value="rishikesh">Rishikesh</option>
                </select>
                <RiArrowDownSLine className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs text-gray-500 uppercase mb-1">Your Query</label>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="I'd love to learn more about your Char Dham yatra"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <div className="h-5 w-5 relative">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.termsAccepted}
                  onChange={handleCheckboxChange}
                  className="sr-only peer"
                />
                <div className="h-5 w-5 border border-gray-300 rounded bg-white peer-checked:bg-orange-500 peer-checked:border-orange-500 relative">
                  {formData.termsAccepted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 absolute inset-0.5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <label htmlFor="terms" className="text-sm">
                I agree to the Terms and Condition
              </label>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                Send now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Quick Links</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <PackageCard
            title="Kedarnath Package 2025 | Haridwar"
            image="/blog/blog_3.png"
            location="Delhi"
            duration="1N/2D"
            persons={1}
            price={12500}
          />

          <PackageCard
            title="Kedarnath Package 2025 | Haridwar"
            image="/blog/blog_3.png"
            location="Delhi"
            duration="1N/2D"
            persons={1}
            price={12500}
          />

          <PackageCard
            title="Kedarnath Package 2025 | Haridwar"
            image="/blog/blog_3.png"
            location="Delhi"
            duration="1N/2D"
            persons={1}
            price={12500}
          />
        </div>
      </div>
    </div>
  )
}

// Package Card Component
function PackageCard({
  title,
  image,
  location,
  duration,
  persons,
  price,
}: {
  title: string
  image: string
  location: string
  duration: string
  persons: number
  price: number
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold mb-3">{title}</h3>

        <div className="flex flex-wrap gap-4 mb-3">
          <div className="flex items-center gap-1 text-sm">
            <RiMapPinLine className="w-4 h-4 text-orange-500" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <RiCalendarLine className="w-4 h-4 text-orange-500" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <RiUserLine className="w-4 h-4 text-orange-500" />
            <span>Total Person {persons}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm">Starts From</p>
            <p className="font-bold">
              ₹{price}
              <span className="font-normal text-sm">/Person</span>
            </p>
          </div>

          <button className="text-orange-500 hover:underline flex items-center gap-1">
            <span>Request A Call</span>
          </button>
        </div>
      </div>
    </div>
  )
}

