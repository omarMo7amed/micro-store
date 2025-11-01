export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  longDescription: string;
  offer?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Fidget Spinner 1',
    price: 9.99,
    description: 'A cool fidget spinner to keep your hands busy.',
    imageUrl: 'http://localhost:8000/fidget-1.jpg',
    longDescription:
      'This is a high-quality fidget spinner made with durable materials. Perfect for stress relief and improving focus.',
    offer: '10% off for first-time buyers',
  },
  {
    id: 2,
    name: 'Fidget Spinner 2',
    price: 12.99,
    description: 'A premium fidget spinner with a sleek design.',
    imageUrl: 'http://localhost:8000/fidget-2.jpg',
    longDescription:
      'This premium fidget spinner offers smooth spinning and a stylish look. Ideal for collectors and enthusiasts.',
  },
  {
    id: 3,
    name: 'Fidget Spinner 3',
    price: 7.99,
    description: 'An affordable fidget spinner for everyone.',
    imageUrl: 'http://localhost:8000/fidget-3.jpg',
    longDescription:
      'This budget-friendly fidget spinner is perfect for kids and adults alike. Lightweight and easy to carry.',
  },
  {
    id: 5,
    name: 'Fidget Spinner 5',
    price: 19.99,
    description: 'A metallic fidget spinner with a premium feel.',
    imageUrl: 'http://localhost:8000/fidget-5.jpg',
    longDescription:
      'Crafted from high-quality metal, this fidget spinner is durable and offers a smooth spinning experience.',
  },
  {
    id: 6,
    name: 'Fidget Spinner 6',
    price: 8.99,
    description: 'A colorful fidget spinner for kids.',
    imageUrl: 'http://localhost:8000/fidget-6.jpg',
    longDescription:
      'This vibrant fidget spinner is designed to attract kids with its bright colors and fun design.',
  },
  {
    id: 7,
    name: 'Fidget Spinner 7',
    price: 15.99,
    description: 'A high-speed fidget spinner for enthusiasts.',
    imageUrl: 'http://localhost:8000/fidget-7.jpg',
    longDescription:
      'This high-speed fidget spinner is perfect for those who love fast and smooth spinning action.',
  },
  {
    id: 8,
    name: 'Fidget Spinner 8',
    price: 11.99,
    description: 'A lightweight fidget spinner for portability.',
    imageUrl: 'http://localhost:8000/fidget-8.jpg',
    longDescription:
      'This lightweight fidget spinner is easy to carry and perfect for on-the-go use.',
  },
  {
    id: 9,
    name: 'Fidget Spinner 9',
    price: 13.99,
    description: 'A durable fidget spinner for long-term use.',
    imageUrl: 'http://localhost:8000/fidget-9.jpg',
    longDescription:
      'Made with high-quality materials, this fidget spinner is built to last and withstand heavy use.',
  },
  {
    id: 10,
    name: 'Fidget Spinner 10',
    price: 16.99,
    description: 'A customizable fidget spinner.',
    imageUrl: 'http://localhost:8000/fidget-10.jpg',
    longDescription:
      'This fidget spinner allows you to customize its design and weights for a personalized experience.',
  },
  {
    id: 11,
    name: 'Fidget Spinner 11',
    price: 18.99,
    description: 'A limited edition fidget spinner.',
    imageUrl: 'http://localhost:8000/fidget-11.jpg',
    longDescription:
      "This limited edition fidget spinner is a must-have for collectors. Get yours before it's gone!",
  },
];
