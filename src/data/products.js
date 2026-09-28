import kanzlerImg from '../assets/kanzler-beef.avif';
import sosisImg from '../assets/sosis.jpeg';
import kentangImg from '../assets/kentang.jpeg';

export const CATEGORIES = [
  { id: 'all', name: 'Semua' },
  { id: 'sosis', name: 'Sosis', image: sosisImg },
  { id: 'nugget', name: 'Nugget', image: sosisImg }, // Placeholder menggunakan sosis jika belum ada
  { id: 'bakso', name: 'Bakso', image: sosisImg },
  { id: 'kentang', name: 'Kentang', image: kentangImg },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Sosis Kanzler Singles',
    category: 'sosis',
    variant: 'Original - 65g',
    price: 8500,
    stock: 120,
    image: kanzlerImg,
  },
  {
    id: 2,
    name: 'Sosis Kanzler Singles',
    category: 'sosis',
    variant: 'Hot - 65g',
    price: 8500,
    stock: 100,
    image: kanzlerImg,
  },
  {
    id: 3,
    name: 'Sosis Kanzler Singles',
    category: 'sosis',
    variant: 'Cheese - 65g',
    price: 9000,
    stock: 100,
    image: kanzlerImg,
  },
  {
    id: 4,
    name: 'Crispy Nugget Kanzler',
    category: 'nugget',
    variant: 'Original - 450g',
    price: 45000,
    stock: 85,
    image: kanzlerImg,
  },
  {
    id: 5,
    name: 'Beef Cocktail Sausage',
    category: 'sosis',
    variant: 'Pack - 500g',
    price: 55000,
    stock: 50,
    image: kanzlerImg,
  },
  {
    id: 6,
    name: 'French Fries Shoestring',
    category: 'kentang',
    variant: '1 Kg',
    price: 32000,
    stock: 60,
    image: kentangImg,
  },
  {
    id: 7,
    name: 'Bakso Sapi Spesial',
    category: 'bakso',
    variant: 'Pack - 50pcs',
    price: 48000,
    stock: 40,
    image: sosisImg,
  },
  {
    id: 8,
    name: 'Sosis Kanzler Singles',
    category: 'sosis',
    variant: 'Original - 65g',
    price: 8500,
    stock: 150,
    image: kanzlerImg,
  },
];