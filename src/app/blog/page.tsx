import Image from "next/image"
import Link from "next/link"


const popular_posts = [
    {
        id: 1,
        category: 'Travelling',
        title: 'Travelling as a way of self-discovery and progress',
        description: 'Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...',
        imageUrl: '/blog/blog_.png',
        alt: 'Gartang Gali trek',
        readTime: '5 min read',
        link: '#',
    },
    {
        id: 2,
        category: 'Trek',
        title: 'Brahmatal Trek - A Snowy Himalayan Escape',
        description: 'Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...',
        imageUrl: '/blog/blog_.png',
        alt: 'Brahmatal Trek',
        readTime: '5 min read',
        link: '#',
    },
    {
        id: 3,
        category: 'Adventure',
        title: 'Rupin Pass Trek - A Thrilling High-Altitude Adventure',
        description: 'Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...',
        imageUrl: '/blog/blog_.png',
        alt: 'Rupin Pass Trek',
        readTime: '5 min read',
        link: '#',
    },
    {
        id: 4,
        category: 'Travelling',
        title: 'Travelling as a way of self-discovery and progress',
        description: 'Gartang Gali Trek, a historic wooden bridge trek in Uttarkashi, Uttarakhand, has reopened for tourists after 59 years. Once a',
        imageUrl: '/blog/blog_.png',
        alt: 'self-discovery',
        readTime: '5 min read',
        link: '#',
    },
    {
        id: 5,
        category: 'Snowy',
        title: 'Brahmatal Trek - A Snowy Himalayan Escape',
        description: 'Gartang Gali Trek, a historic wooden bridge trek in Uttarkashi, Uttarakhand, has reopened for tourists after 59 years. Once a',
        imageUrl: '/blog/blog_.png',
        alt: 'Brahmatal Trek',
        readTime: '5 min read',
        link: '#',
    },
    {
        id: 6,
        category: 'Adventure',
        title: 'Rupin Pass Trek - A Thrilling High-Altitude Adventure',
        description: 'Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...',
        imageUrl: '/blog/blog_.png',
        alt: 'Rupins Pass Trek',
        readTime: '5 min read',
        link: '#',
    },
];
const trending_posts = [
    {
        id: 1,
        category: 'Travelling',
        title: 'Travelling as a way of self-discovery and progress',
        description: 'Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...',
        imageUrl: '/blog/blog_.png',
        alt: 'Gartang Gali trek',
        readTime: '5 min read',
        link: '#',
    },
    {
        id: 2,
        category: 'Trek',
        title: 'Brahmatal Trek - A Snowy Himalayan Escape',
        description: 'Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...',
        imageUrl: '/blog/blog_.png',
        alt: 'Brahmatal Trek',
        readTime: '5 min read',
        link: '#',
    },
    {
        id: 3,
        category: 'Adventure',
        title: 'Rupin Pass Trek - A Thrilling High-Altitude Adventure',
        description: 'Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...',
        imageUrl: '/blog/blog_.png',
        alt: 'Rupin Pass Trek',
        readTime: '5 min read',
        link: '#',
    },
];

const sidePosts = [
    {
        id: 1,
        category: 'Trek',
        title: 'Brahmatal Trek - A Snowy Himalayan Escape',
        imageUrl: '/blog/blog_2.png',
        alt: 'Brahmatal Trek',
        link: '#',
    },
    {
        id: 2,
        category: 'Valley',
        title: 'Valley of Flowers Trek - A Colorful Himalayan Wonderland',
        imageUrl: '/blog/blog_.png',
        alt: 'Valley of Flowers Trek',
        link: '#',
    },
    {
        id: 3,
        category: 'Kedarnath',
        title: 'Kedarnath Helicopter Service Opening Dates',
        imageUrl: '/blog/blog_2.png',
        alt: 'Kedarnath Helicopter Service',
        link: '#',
    },
];

export default function TravelBlog() {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 text-gray-900">
            {/* Header */}
            <header className="pt-6 pb-4">
                <div className="text-sm text-gray-500 mb-2">Blog</div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Inspiration For Travel By Triplanza</h1>
                <p className="text-gray-500 mb-4">Latest Articles On Travel</p>
                <div className="flex space-x-4 text-gray-400">
                    <Link href="#" className="hover:text-gray-600">
                        {/* <Facebook size={18} /> */}
                    </Link>
                    <Link href="#" className="hover:text-gray-600">
                        {/* <Instagram size={18} /> */}
                    </Link>
                    <Link href="#" className="hover:text-gray-600">
                        {/* <Twitter size={18} /> */}
                    </Link>
                    <Link href="#" className="hover:text-gray-600">
                        {/* <Youtube size={18} /> */}
                    </Link>
                </div>
            </header>

            {/* Featured blog posts */}
            <section className="py-8">
                <h2 className="text-2xl font-bold mb-6">Featured blog posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main featured post */}
                    <div className="md:col-span-2">
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src="/blog/blog_.png"
                                alt="Gartang Gali trek"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="mt-4">
                            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-2">Trek</span>
                            <h3 className="text-xl font-bold mb-2">Gartang Gali trek</h3>
                            <h4 className="text-lg font-bold mb-2">A Historic Adventure in Uttarakhand</h4>
                            <p className="text-gray-600 text-sm mb-4">
                                {`Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists
                                after 59 years. Once a trade route between India and Tibet, this 2.5 km trek offers breathtaking views
                                of Nelong Valley, rich flora, and rare wildlife like snow leopards. Built in 1902, the bridge is a
                                marvel of traditional craftsmanship. The trek is open from May to October, with an entry ticket required
                                but no special permit. Triplanza, India's first travel company organizing this trek, offers an
                                unforgettable adventure for nature and history enthusiasts.`}
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                Read more <span className="ml-1">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Side featured posts */}
                    <div className="space-y-6">
                        {sidePosts.map((sidePost) => (
                            <div key={sidePost.id} className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/2">
                                    <Image
                                        src={sidePost.imageUrl}
                                        alt={sidePost.alt}
                                        width={200}
                                        height={200}
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-1">
                                        {sidePost.category}
                                    </span>
                                    <h3 className="text-base font-bold mb-1">{sidePost.title}</h3>
                                    <Link
                                        href={sidePost.link}
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                    >
                                        Read more <span className="ml-1">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter section */}
            <section className="relative py-16 my-12 rounded-lg overflow-hidden">
                <div className="w-full bg-[url('/blog/blog_3.png')] bg-cover bg-center relative">
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
                                        Subscribe
                                    </button>
                                </div>
                                <p className="text-white text-xs  max-w-md ml-auto mt-2">{`By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular section */}
            <section className="py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Popular</h2>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded px-3 py-1">
                        View all
                    </Link>
                </div>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                {/* popular post */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {popular_posts.map((post) => (
                        <div key={post.id}>
                            <div className="rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.alt}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-600">{post.category}</span>
                                <span className="text-sm text-gray-600">{post.readTime}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{post.description}</p>
                            <Link href={post.link} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                Read more <span className="ml-1">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trending section */}
            <section className="py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Trending</h2>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded px-3 py-1">
                        View all
                    </Link>
                </div>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                {/* popular post */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {trending_posts.map((post) => (
                        <div key={post.id}>
                            <div className="rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.alt}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-600">{post.category}</span>
                                <span className="text-sm text-gray-600">{post.readTime}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{post.description}</p>
                            <Link href={post.link} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                Read more <span className="ml-1">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

