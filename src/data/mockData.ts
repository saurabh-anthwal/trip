import { TourPackage, Destination, Testimonial, Place, ExplorePlace } from '@/types';

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: 'Historical Jaipur Tour',
    location: 'Jaipur, Rajasthan',
    image: '/destinations/jaipur.jpg',
    price: 299,
    rating: 4.8,
    reviews: 128,
    duration: '3 Days'
  },
  {
    id: 2,
    title: 'Taj Mahal Experience',
    location: 'Agra, Uttar Pradesh',
    image: '/destinations/agra.jpg',
    price: 199,
    rating: 4.9,
    reviews: 256,
    duration: '2 Days'
  },
  {
    id: 3,
    title: 'Varanasi Spiritual Journey',
    location: 'Varanasi, Uttar Pradesh',
    image: '/destinations/varanasi.jpg',
    price: 349,
    rating: 4.7,
    reviews: 189,
    duration: '4 Days'
  },
];

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Jaipur',
    image: '/destinations/jaipur-thumb.jpg',
    rating: 4.8,
    reviews: 128,
    duration: '3 Days',
    price: 299
  },
  {
    id: 2,
    name: 'Agra',
    image: '/destinations/agra-thumb.jpg',
    rating: 4.9,
    reviews: 256,
    duration: '2 Days',
    price: 199
  },
  {
    id: 3,
    name: 'Varanasi',
    image: '/destinations/varanasi-thumb.jpg',
    rating: 4.7,
    reviews: 189,
    duration: '4 Days',
    price: 349
  },
  {
    id: 4,
    name: 'Hampi',
    image: '/destinations/hampi-thumb.jpg',
    rating: 4.6,
    reviews: 120,
    duration: '3 Days',
    price: 249
  },
  {
    id: 5,
    name: 'Ranthambore',
    image: '/destinations/ranthambore-thumb.jpg',
    rating: 4.5,
    reviews: 90,
    duration: '2 Days',
    price: 179
  },
  {
    id: 6,
    name: 'Gangtok',
    image: '/destinations/gangtok-thumb.jpg',
    rating: 4.4,
    reviews: 70,
    duration: '4 Days',
    price: 399
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: '/home-img/testimonal.PNG',
    comment: 'It was an nice experience to Char Dham Yatra with Triplanza and our cab driver Mr Nitin is also a very sincere person who guided us all these four holy places. Thanks Mr Suraj Bhatt and Nitin',
    rating: 5
  },
  {
    id: 2,
    name: 'Mike Chen',
    image: '/home-img/testimonal.PNG',
    comment: 'Best travel experience ever! Will definitely book again with Triplanza.',
    rating: 5
  },
];

export const monthlyPlaces: Place[] = [
  {
    id: 1,
    title: 'Hampi',
    location: 'Karnataka',
    image: '/home-img/Rajasthan.PNG',
    description: 'January'
  },
  {
    id: 2,
    title: 'Ranthambore',
    location: 'Rajasthan',
    image: '/home-img/Goa.PNG',
    description: 'Ranthambore is a national park in the state of Rajasthan, India.'
  },
  {
    id: 3,
    title: 'Gangtok',
    location: 'Sikkim',
    image: '/home-img/Varanasi.PNG',
    description: 'Gangtok is the capital of the Indian state of Sikkim.'
  },
  {
    id: 4,
    title: 'Gangtok',
    location: 'Sikkim',
    image: '/home-img/Darjeeling.PNG',
    description: 'Gangtok is the capital of the Indian state of Sikkim.'
  },
  {
    id: 5,
    title: 'Gangtok',
    location: 'Sikkim',
    image: '/home-img/Valley.PNG',
    description: 'Gangtok is the capital of the Indian state of Sikkim.'
  },
  {
    id: 6,
    title: 'Gangtok',
    location: 'Sikkim',
    image: '/home-img/Meghalaya.PNG',
    description: 'Gangtok is the capital of the Indian state of Sikkim.'
  },
  {
    id: 7,
    title: 'Gangtok',
    location: 'Sikkim',
    image: '/home-img/Kerala.PNG',
    description: 'Gangtok is the capital of the Indian state of Sikkim.'
  },
  {
    id: 8,
    title: 'Gangtok',
    location: 'Sikkim',
    image: '/home-img/Amritsar.PNG',
    description: 'Gangtok is the capital of the Indian state of Sikkim.'
  }
];

export const explorePlaces: ExplorePlace[] = [
  {
    id: 1,
    title: 'Lakes',
    location: 'Rajasthan',
    image: '/explorePlaces/lakes.jpg',
    description: 'Explore the beautiful lakes of Rajasthan, India.',
    bestTime:'March to May',
    price: 100,
    category: 'Lakes'
  },
  {
    id: 2,
    title: 'Wildlife',
    location: 'Assam',
    image: '/explorePlaces/wildlife.jpg',
    description: 'Explore the wildlife of Assam, India.',
    bestTime:'March to May',
    price: 100 ,
    category: 'Wildlife'
  },
  {
    id: 3,
    title: 'Temples',
    location: 'Tamil Nadu',
    image: '/explorePlaces/temples.jpg',
    description: 'Explore the beautiful temples of Tamil Nadu, India.',
    bestTime:'March to May',
    price: 100,
    category: 'Temples'
  },
  {
    id: 4,
    title: 'Shopping',
    location: 'Delhi',
    image: '/explorePlaces/shopping.jpg',
    description: 'Explore the shopping experience in Delhi, India.',
    bestTime:'March to May',
    price: 100,
    category: 'Shopping'
  },
  {
    id: 5,
    title: 'Viewpoints',
    location: 'Himachal Pradesh',
    image: '/explorePlaces/viewpoints.jpg',
    description: 'Explore the beautiful viewpoints of Himachal Pradesh, India.',
    bestTime:'March to May',
    price: 100,
    category: 'Viewpoints'
  },
  {
    id: 6,
    title: 'Adventure',
    location: 'Uttarakhand',
    image: '/explorePlaces/adventure.jpg',
    description: 'Explore the adventure activities in Uttarakhand, India.',
    bestTime:'March to May',
    price: 100,
    category: 'Adventure'
  }
];

export const stats = [
  { label: '10 k+', description: 'Happy Customers' },
  { label: '200 k+', description: 'Reviews & Ratings' },
  { label: '10 k+', description: 'Worldwide Tours' },
  { label: '10 k+', description: 'Years Experience' },
];

export const services = [
  {
    id: 1,
    title: 'Custom Tour Planning',
    description: 'Personalized itineraries tailored to your preferences and travel style.',
    icon: 'FaMapMarkedAlt',
    features: ['Tailored itineraries', 'Local insights', 'Flexible scheduling']
  },
  {
    id: 2,
    title: 'Best Price Guarantee',
    description: 'We ensure competitive pricing and the best value for your travel budget.',
    icon: 'FaWallet',
    features: ['Price matching', 'No hidden fees']
  },
  {
    id: 3,
    title: 'Expert Travel Support',
    description: '24/7 support from our experienced travel consultants throughout your journey.',
    icon: 'FaCheckCircle',
    features: ['24/7 support', 'Expert advice']
  }
];
