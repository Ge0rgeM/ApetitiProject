import Logo from '@/assets/Logo.png';

export const Globals = {
    logo: Logo,
};


const imageImports = import.meta.glob('@/assets/pics/*.{jpg,jpeg,png,gif}', {
  eager: true,
  import: 'default',
});
// Convert image paths to a cleaner object with file names as keys
const images = Object.entries(imageImports).reduce((acc, [path, src]) => {
  const fileName = path.split('/').pop(); // e.g., 'fursheti.png'
  acc[fileName] = src;
  return acc;
}, {});

export const allImages = [
  {
    id: 1,
    imgUrl: images['BackgroundPic-600x600.jpg'],
    description: 'ეს არის აღწერა, ეს არის აღწერა, ეს არის აღწერა...',
  },
  {
    id: 2,
    imgUrl: images['fursheti.png'],
    description: 'ეს არის აღწერა, ეს არის აღწერა, ეს არის აღწერა...',
  },
  {
    id: 3,
    imgUrl: images['kafe1.png'],
    description: 'ეს არის აღწერა, ეს არის აღწერა, ეს არის აღწერა...',
  },
  {
    id: 4,
    imgUrl: images['lanchi.png'],
    description: 'ეს არის აღწერა, ეს არის აღწერა, ეს არის აღწერა...',
  },
  {
    id: 5,
    imgUrl: images['kafe1.png'],
    description: 'ეს არის აღწერა, ეს არის აღწერა, ეს არის აღწერა...',
  },
  {
    id: 6,
    imgUrl: images['lanchi.png'],
    description: 'ეს არის აღწერა, ეს არის აღწერა, ეს არის აღწერა...',
  },
];
