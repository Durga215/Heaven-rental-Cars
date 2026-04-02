export interface Vehicle {
  id: number;
  name: string;
  type: string;
  description: string;
  seater_capacity: number;
  image_url: string;
  available: boolean;
  features: string[];
}

export const vehiclesData: Vehicle[] = [
  {
    id: 1,
    name: "Toyota Innova",
    type: "MUV",
    description: "Comfortable and spacious MUV designed for smooth long-distance travel with family or groups.",
    seater_capacity: 7,
    image_url: "/vehicles/add1.jpg",
    available: true,
    features: ["AC", "Music System", "GPS"]
  },
  {
    id: 2,
    name: "Toyota Etios",
    type: "Sedan",
    description: "A smooth and fuel-efficient sedan ideal for city travel and short family trips.",
    seater_capacity: 4,
    image_url: "/vehicles/add2.jpg",
    available: true,
    features: ["AC", "Music System", "GPS"]
  },
  {
    id: 3,
    name: "Toyota Etios Platinum",
    type: "Sedan",
    description: "Reliable and fuel-efficient sedan offering a smooth driving experience, ideal for small families.",
    seater_capacity: 4,
    image_url: "/vehicles/add3.jpg",
    available: true,
    features: ["AC", "Music System", "GPS"]
  },
  {
    id: 4,
    name: "Force Tempo Traveller",
    type: "Tempo Traveller",
    description: "Spacious and comfortable tempo traveller designed for group journeys, offering ample seating, smooth travel, and a convenient ride.",
    seater_capacity: 12,
    image_url: "/vehicles/Van7.jpeg",
    available: true,
    features: ["AC", "tooth"]
  }
];