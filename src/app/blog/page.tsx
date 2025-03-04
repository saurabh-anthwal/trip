import Image from "next/image";
import Link from "next/link";

const popular_posts = [
  {
    id: 1,
    category: "Travelling",
    title: "Travelling as a way of self-discovery and progress",
    description:
      "Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...",
    imageUrl: "/blog/blog_.png",
    alt: "Gartang Gali trek",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: 2,
    category: "Trek",
    title: "Brahmatal Trek - A Snowy Himalayan Escape",
    description:
      "Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...",
    imageUrl: "/blog/blog_.png",
    alt: "Brahmatal Trek",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: 3,
    category: "Adventure",
    title: "Rupin Pass Trek - A Thrilling High-Altitude Adventure",
    description:
      "Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...",
    imageUrl: "/blog/blog_.png",
    alt: "Rupin Pass Trek",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: 4,
    category: "Travelling",
    title: "Travelling as a way of self-discovery and progress",
    description:
      "Gartang Gali Trek, a historic wooden bridge trek in Uttarkashi, Uttarakhand, has reopened for tourists after 59 years. Once a",
    imageUrl: "/blog/blog_.png",
    alt: "self-discovery",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: 5,
    category: "Snowy",
    title: "Brahmatal Trek - A Snowy Himalayan Escape",
    description:
      "Gartang Gali Trek, a historic wooden bridge trek in Uttarkashi, Uttarakhand, has reopened for tourists after 59 years. Once a",
    imageUrl: "/blog/blog_.png",
    alt: "Brahmatal Trek",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: 6,
    category: "Adventure",
    title: "Rupin Pass Trek - A Thrilling High-Altitude Adventure",
    description:
      "Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...",
    imageUrl: "/blog/blog_.png",
    alt: "Rupins Pass Trek",
    readTime: "5 min read",
    link: "#",
  },
];
const trending_posts = [
  {
    id: 1,
    category: "Travelling",
    title: "Travelling as a way of self-discovery and progress",
    description:
      "Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...",
    imageUrl: "/blog/blog_.png",
    alt: "Gartang Gali trek",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: 2,
    category: "Trek",
    title: "Brahmatal Trek - A Snowy Himalayan Escape",
    description:
      "Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...",
    imageUrl: "/blog/blog_.png",
    alt: "Brahmatal Trek",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: 3,
    category: "Adventure",
    title: "Rupin Pass Trek - A Thrilling High-Altitude Adventure",
    description:
      "Gartang Gali Trek, a historic wooden bridge trek in Uttarakashi, Uttarakhand, has reopened for tourists after 59 years. Once a...",
    imageUrl: "/blog/blog_.png",
    alt: "Rupin Pass Trek",
    readTime: "5 min read",
    link: "#",
  },
];

const sidePosts = [
  {
    id: 1,
    category: "Trek",
    title: "Brahmatal Trek - A Snowy Himalayan Escape",
    imageUrl: "/blog/blog_2.png",
    alt: "Brahmatal Trek",
    link: "#",
  },
  {
    id: 2,
    category: "Valley",
    title: "Valley of Flowers Trek - A Colorful Himalayan Wonderland",
    imageUrl: "/blog/blog_.png",
    alt: "Valley of Flowers Trek",
    link: "#",
  },
  {
    id: 3,
    category: "Kedarnath",
    title: "Kedarnath Helicopter Service Opening Dates",
    imageUrl: "/blog/blog_2.png",
    alt: "Kedarnath Helicopter Service",
    link: "#",
  },
];

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="18"
    viewBox="0 0 10 18"
    fill="currentColor"
  >
    <path d="M6.065 17.9972V9.80115H8.83L9.241 6.59215H6.065V4.54815C6.065 3.62215 6.323 2.98815 7.652 2.98815H9.336V0.12715C8.517 0.03915 7.693 -0.00285004 6.869 0.000149963C4.425 0.000149963 2.747 1.49215 2.747 4.23115V6.58615H0V9.79515H2.753V17.9972H6.065Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8359 0H4.83594C2.36116 0 0.335938 2.02432 0.335938 4.5V13.5C0.335938 15.9748 2.36116 18 4.83594 18H13.8359C16.3107 18 18.3359 15.9748 18.3359 13.5V4.5C18.3359 2.02432 16.3107 0 13.8359 0ZM9.33594 12.7499C7.26459 12.7499 5.58586 11.0704 5.58586 9C5.58586 6.92865 7.26459 5.24993 9.33594 5.24993C11.4064 5.24993 13.086 6.92865 13.086 9C13.086 11.0704 11.4064 12.7499 9.33594 12.7499ZM13.086 4.12492C13.086 4.74615 13.5891 5.24992 14.211 5.24992C14.8329 5.24992 15.336 4.74615 15.336 4.12492C15.336 3.5037 14.8329 2.99992 14.211 2.99992C13.5891 2.99992 13.086 3.5037 13.086 4.12492Z"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="currentColor"
  >
    <path d="M17.9689 3.978C17.9819 4.153 17.9819 4.327 17.9819 4.501C17.9819 9.826 13.9289 15.962 6.52194 15.962C4.23994 15.962 2.11994 15.301 0.335938 14.153C0.659938 14.19 0.971937 14.203 1.30894 14.203C3.19194 14.203 4.92494 13.567 6.30994 12.482C4.53894 12.445 3.05494 11.285 2.54294 9.689C2.79194 9.726 3.04194 9.751 3.30394 9.751C3.66494 9.751 4.02794 9.701 4.36494 9.614C2.51794 9.24 1.13494 7.619 1.13494 5.661V5.611C1.67194 5.91 2.29494 6.097 2.95494 6.122C1.86994 5.4 1.15894 4.165 1.15894 2.768C1.15894 2.02 1.35794 1.334 1.70694 0.736C3.68994 3.179 6.67094 4.776 10.0129 4.951C9.95094 4.651 9.91294 4.34 9.91294 4.028C9.91294 1.808 11.7089 0 13.9409 0C15.1009 0 16.1479 0.486 16.8839 1.272C17.7939 1.097 18.6659 0.76 19.4399 0.299C19.1409 1.234 18.5039 2.02 17.6689 2.519C18.4799 2.431 19.2659 2.207 19.9879 1.895C19.4399 2.693 18.7549 3.404 17.9689 3.978Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="16"
    viewBox="0 0 24 16"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.9553 0.546524C21.9171 0.671826 22.8362 1.60713 22.9532 2.58254C23.3672 6.15726 23.3672 9.62366 22.9532 13.1973C22.8362 14.1727 21.9171 15.1091 20.9553 15.2333C15.0909 15.962 9.16025 15.962 3.29752 15.2333C2.33493 15.1088 1.41577 14.1727 1.29882 13.1973C0.884768 9.62338 0.884768 6.15726 1.29882 2.58254C1.41577 1.60713 2.33493 0.671548 3.29752 0.546524C9.16025 -0.182175 15.0906 -0.182175 20.9553 0.546524ZM10.2696 4.17777V11.6031L15.8386 7.8906L10.2696 4.17777Z"
    />
  </svg>
);

const socialLinks = [
  { href: "#", icon: FacebookIcon, text: "3.7M" },
  { href: "#", icon: InstagramIcon, text: "2.4M" },
  { href: "#", icon: TwitterIcon, text: "3.7M" },
  { href: "#", icon: YoutubeIcon, text: "2.4M" },
];

export default function TravelBlog() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 text-gray-900">
      {/* Header */}
      <header className="pt-6 pb-4">
        <div className="text-sm text-black mb-2">Blog</div>
        <h1 className="text-5xl text-[#050505] font-bold tracking-tight mb-2">
          Inspiration For Travel By Triplanza
        </h1>
        <p className="text-gray-500 mb-4 text-lg">Latest Articles On Travel</p>
        <div className="flex space-x-6 text-gray-400">
          {socialLinks.map(({ href, icon: Icon, text }, index) => (
            <Link
              key={index}
              href={href}
              className="flex items-center space-x-2 hover:text-gray-600"
            >
              <Icon />
              <span className="text-sm">{text}</span>
            </Link>
          ))}
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
                src="/blog/blog.jpg"
                alt="Gartang Gali trek"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="mt-4">
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-2">
                Trek
              </span>
              <h3 className="text-3xl font-bold mb-2">Gartang Gali trek</h3>
              <h4 className="text-3xl font-bold mb-2">
                A Historic Adventure in Uttarakhand
              </h4>
              <p className="text-gray-600 text-sm mb-4 text-justify">
                {`Gartang Gali Trek, a historic wooden bridge trek in Uttarkashi, Uttarakhand, has reopened for tourists after 59 years. Once a trade route between India and Tibet, this 2.5 km trek offers breathtaking views of Nelong Valley, rich flora, and rare wildlife like snow leopards. Built at 11,000 feet, the bridge is a marvel of traditional craftsmanship. The trek is open from May to October, with an entry ticket required but no special permit. Triplanza, India’s first travel company organizing this trek, offers an unforgettable adventure for nature and history enthusiasts.`}
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-black hover:text-gray-900"
              >
                <button className="flex items-center text-black hover:underline">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#000"
                    className="ml-1"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9603 11.1428C15.18 11.3625 15.18 11.7186 14.9603 11.9383L9.22541 17.6731C9.00573 17.8928 8.64963 17.8928 8.42996 17.6731L8.16476 17.408C7.94508 17.1883 7.94508 16.8321 8.16476 16.6125L13.2367 11.5406L8.16476 6.46861C7.94508 6.24893 7.94508 5.89283 8.16476 5.67315L8.42996 5.40796C8.64963 5.18828 9.00573 5.18828 9.22541 5.40796L14.9603 11.1428Z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Side featured posts */}
          <div className="space-y-6">
            {sidePosts.map((sidePost) => (
              <div
                key={sidePost.id}
                className="flex flex-col items-center justify-center md:flex-row gap-4"
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={sidePost.imageUrl}
                    alt={sidePost.alt}
                    width={250}
                    height={250}
                    className="w-full h-60 object-cover rounded-lg"
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
        <div className="w-full bg-[url('/blog/blog_3.png')] bg-cover bg-center relative h-80">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="max-w-[1200px] mx-auto px-4 py-16 relative flex items-center justify-center h-80">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left md:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Sign up for our newsletter
                </h3>
                <p className="text-gray-200 text-sm">
                  Stay updated with our latest travel stories and adventures.
                  Join our community of explorers!
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
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded px-3 py-1"
          >
            View all
          </Link>
        </div>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

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
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{post.description}</p>
              <Link
                href={post.link}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
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
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded px-3 py-1"
          >
            View all
          </Link>
        </div>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

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
              <Link
                href={post.link}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Read more <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
