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
    id: 'shirt1',
    name: 'T-Shirt',
    type: 'clothing',
    src: '/images/shirt1.png'
  },
  {
    id: 'costume1',
    name: 'Princess',
    type: 'clothing',
    src: '/images/costume1.png'
  },
  {
    id: 'costume2',
    name: 'Superhero',
    type: 'clothing',
    src: '/images/costume2.png'
  }
];

// Placeholder data for memory cards
const cards: Card[] = [
  {
    pairId: 1,
    image: '/images/florcata1.jpeg'
  },
  {
    pairId: 2,
    image: '/images/florcata2.jpeg'
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