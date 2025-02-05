export interface TourPackage {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
}

export interface Destination {
  id: number;
  name: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  comment: string;
  rating: number;
}
