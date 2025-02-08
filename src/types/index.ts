export interface Place {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
}

export interface ExplorePlace {
  id: number;
  title: string;
  location: string;
  image: string;
  description:string;
  bestTime:string;
  price:number;
  category: string;
}

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
  rating: number;
  reviews: number;
  duration: string;
  price: number;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  comment: string;
  rating: number;
}
