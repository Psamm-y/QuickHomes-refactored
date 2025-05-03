import image1 from '../assets/rental-houses.jpg'
import image2 from '../assets/real-estate2.jpg'
import image3 from '../assets/real-estate1.jpg'
import { regions } from './hero'
export const properties = [
  {
    images: [
      image1,
      image2,
      image3
    ]
    ,
    type:"Apartment",
    description: "Light And Modern Apartment",
    location: "Madina",
    region: "Greater Accra",
    rating:"4.76",
    beds: "2",
    bath: "1",
    area: "2500",
    price: "21000",
    author:"Samuel Ampadu"
  }, {
    images: [
      image2
    ],
    type: "House",
    description: "2 Bedrooms Self-Contain",
    location:"Gbawe",
    region: "Greater Accra",
    rating: "",
    beds: "2",
    bath: "3",
    area: "5000",
    price: "36000",
author:"Peniel Adams"
  }
]