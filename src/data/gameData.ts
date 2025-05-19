import { Accessory, Card } from '../types';

// Placeholder data for accessories
const accessories: Accessory[] = [
  {
    id: 'hat1',
    name: 'Party Hat',
    type: 'hat',
    src: '/images/hat1.png'
  },
  {
    id: 'hat2',
    name: 'Cowboy Hat',
    type: 'hat',
    src: '/images/hat2.png'
  },
  {
    id: 'glasses1',
    name: 'Sunglasses',
    type: 'glasses',
    src: '/images/glasses1.png'
  },
  {
    id: 'glasses2',
    name: 'Sunglasses',
    type: 'glasses',
    src: '/images/glasses2.png'
  },
  {
    id: 'shorts1',
    name: 'Short',
    type: 'clothing',
    src: '/images/shorts1.png'
  },
  {
    id: 'shoeR',
    name: 'shoeR',
    type: 'clothing',
    src: '/images/shoeR.png'
  },
  {
    id: 'shoeL',
    name: 'shoeL',
    type: 'clothing',
    src: '/images/shoeL.png'
  },
  {
    id: 'shoe2R',
    name: 'shoe2R',
    type: 'clothing',
    src: '/images/shoe2R.png'
  },
  {
    id: 'shoe2L',
    name: 'shoe2L',
    type: 'clothing',
    src: '/images/shoe2L.png'
  }
];

// Placeholder data for memory cards
const cards: Card[] = [
  {
    pairId: 1,
    image: '/images/florcata1.png'
  },
  {
    pairId: 2,
    image: '/images/florcata2.png'
  },
  {
    pairId: 3,
    image: '/images/stitch3.png'
  },
  {
    pairId: 4,
    image: '/images/stitch4.png'
  },
  {
    pairId: 5,
    image: '/images/stitch5.png'
  },
  {
    pairId: 6,
    image: '/images/stitch6.png'
  }
];

const gameData = {
  accessories,
  cards
};

export default gameData;