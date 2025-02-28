import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SubBlogPage = () => {
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
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mt-28">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm mb-6">
                <Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900">Current Events</span>
            </div>

            <h1 className="text-3xl text-black font-bold mb-2">
                Gartang Gali trek
                <br />
                A Historic Adventure in Uttarakhand
            </h1>
            <div className="relative w-full h-[565px] mb-8">
                <Image
                    src="/blog/sub_blog.png"
                    alt="Gartang Gali Bridge"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            <div className='max-w-4xl mx-auto'>

                <section className="mb-8">
                    <h2 className="text-2xl text-black font-bold mb-2">Introduction</h2>
                    <p className="text-gray-700 mb-6">
                        Gartang Gali Trek, a historic wooden bridge trek in Uttarkashi, Uttarakhand, has reopened for tourists after 59 years. Once a trade route between India and Tibet, this 2.5 km trek offers breathtaking views of Nelong Valley, rich flora, and rare wildlife like snow leopards. Built at 11,000 feet, the bridge is a marvel of traditional craftsmanship. The trek is open from May to October, with an entry ticket required but no special permit. Triplanza, India’s first travel company organizing this trek, offers an unforgettable adventure for nature and history enthusiasts.
                    </p>
                </section>


                <div className="relative w-full h-[400px] mb-8">
                    <Image
                        src="/blog/sub_blogs.png"
                        alt="Gartang Valley View"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                <section className="mb-8">
                    <h2 className="text-2xl text-black font-bold mb-2">Why Visit Gartang Gali trek</h2>
                    <ul className="list-disc pl-6 text-black space-y-2">
                        <li className='text-sm pl-2'> Historic Significance – Built over 150 years ago by Pathans from Peshawar, this bridge was once used for trade between Tibet and India.</li>
                        <li className='text-sm pl-2'>Scenic Beauty – Experience the untouched beauty of Nelong Valley, with its dramatic landscapes, exotic flora, and clear blue skies.</li>
                        <li className='text-sm pl-2'>Thrilling Adventure – Walking on the 300-meter-long wooden bridge, suspended along the mountainside, offers an adrenaline rush like no other.</li>
                        <li className='text-sm pl-2'>Exclusive Experience – To ensure safety, only 10 tourists are allowed on the bridge at a time, making it a unique and peaceful trekking experience.</li>
                    </ul>

                </section>

                <section className="mb-8">
                    <div className="bg-gray-50 border-l-4 border-gray-900 p-4 mb-8">
                        <p className="text-gray-700">
                            The ideal time to visit Gartang Gali is from May to October, when the weather is pleasant and the trek is accessible. During the summer, temperatures range between 10°C to 15°C in the daytime and drop to 5°C at night. </p>
                    </div>

                    <h2 className="text-2xl text-black font-bold mb-4">How to Reach Gartang Gali?</h2>
                    <p className="text-gray-700 mb-4">
                        Gartang Gali is located in Uttarkashi, approximately 247 km from Dehradun. The trek starts from Lanka Bridge, which is 12 km from Harsil.     </p>
                    <div className="mb-4">
                        <p className="font-medium mb-2 text-black">Route Map:</p>
                        <div className="flex items-center flex-wrap gap-2 text-sm text-black">
                            <FaMapMarkerAlt className="text-red-600" />
                            <span className="font-medium">Dehradun</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium">Mussoorie</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium">Suwakholi</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium">Chinyalisour</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium">Dharasu</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium">Uttarkashi</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium">Bhatwari</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium">Gangnani</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium">Harsil</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium">Gartang Gali</span>
                        </div>
                    </div>
                </section>

                <div className="mb-8">
                    <h3 className="text-black font-bold mb-4">Share this post</h3>
                    <div className="flex justify-between items-center pb-4 border-b">
                        <div className="flex items-center gap-4">
                            <button className="hover:bg-gray-100 p-2 rounded-full">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000" stroke="currentColor">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                            </button>
                            <button className="hover:bg-gray-100 p-2 rounded-full">
                                <svg className="w-5 h-5" fill="#000" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </button>
                            <button className="hover:bg-gray-100 p-2 rounded-full">
                                <svg className="w-5 h-5" fill="#000" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </button>
                            <button className="hover:bg-gray-100 p-2 rounded-full">
                                <svg className="w-5 h-5" fill="#000" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-black">Trek</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-black">Travel</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-black">Blogs</span>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto px-4 py-8">
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <h2 className="text-3xl text-black font-bold mb-2">Trending</h2>
                            <p className="text-gray-600 text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <Link href="/blog" className="text-blue-600 hover:underline font-medium">
                            View More →
                        </Link>
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
        </div>
    )
}

export default SubBlogPage