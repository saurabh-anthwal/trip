import { TourPackage, Destination, Testimonial } from '@/types';

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
    image: '/destinations/jaipur-thumb.jpg'
  },
  {
    id: 2,
    name: 'Agra',
    image: '/destinations/agra-thumb.jpg'
  },
  {
    id: 3,
    name: 'Varanasi',
    image: '/destinations/varanasi-thumb.jpg'
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: '/testimonials/user1.jpg',
    comment: 'Amazing experience with Triplanza! The tour was well organized and the guide was very knowledgeable.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mike Chen',
    image: '/testimonials/user2.jpg',
    comment: 'Best travel experience ever! Will definitely book again with Triplanza.',
    rating: 5
  },
];

export const stats = [
  { label: '10 k+', description: 'Happy Customers' },
  { label: '200 k+', description: 'Reviews & Ratings' },
  { label: '10 k+', description: 'Worldwide Tours' },
  { label: '10 k+', description: 'Years Experience' },
];
