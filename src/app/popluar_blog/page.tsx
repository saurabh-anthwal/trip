import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Travelling as a way of self-discovery and progress",
    image: "/blog/blog_.png",
    category: "Travelling",
    readTime: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Brahmatal Trek – A Snowy Himalayan Escape",
    image: "/blog/blog_2.png",
    category: "Trek",
    readTime: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Rupin Pass Trek – A Thrilling High-Altitude Adventure",
    image: "/blog/blog_3.png",
    category: "Adventure",
    readTime: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Travelling as a way of self-discovery and progress",
    image: "/blog/blog_.png",
    category: "Travelling",
    readTime: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Brahmatal Trek – A Snowy Himalayan Escape",
    image: "/blog/blog_2.png",
    category: "Trek",
    readTime: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Rupin Pass Trek – A Thrilling High-Altitude Adventure",
    image: "/blog/blog_3.png",
    category: "Adventure",
    readTime: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Travelling as a way of self-discovery and progress",
    image: "/blog/blog_.png",
    category: "Travelling",
    readTime: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Brahmatal Trek – A Snowy Himalayan Escape",
    image: "/blog/blog_2.png",
    category: "Trek",
    readTime: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Rupin Pass Trek – A Thrilling High-Altitude Adventure",
    image: "/blog/blog_3.png",
    category: "Adventure",
    readTime: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

export default function PopularBlog() {
  return (
    <div className="w-full bg-white mt-28">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl text-black font-bold mb-2">Popular</h2>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link href="#" key={index} className="group">
              <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="relative h-60 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-3 text-xs text-gray-600 uppercase font-medium mb-2">
                    <span className="bg-gray-200 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl text-black font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.description}
                  </p>
                  <div className="text-blue-600 font-medium flex items-center group-hover:underline">
                    Read more <span className="ml-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full bg-[url('/home-img/river-rafting-rishikesh.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-[1200px] mx-auto px-4 py-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left md:w-1/2">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Sign up for our newsletter
              </h3>
              <p className="text-gray-200 text-sm">
                Stay updated with our latest travel stories and adventures. Join
                our community of explorers!
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md ml-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="px-8 py-3 bg-white  text-black rounded-md hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
