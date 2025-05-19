import { Accessory, Card } from '../types';

// Placeholder data for accessories
const accessories: Accessory[] = [
  {
    id: 'hat1',
    name: 'Party Hat',
    type: 'hat',
    src: '/hat1.png'
  },
  {
    id: 'hat2',
    name: 'Cowboy Hat',
    type: 'hat',
    src: '/hat2.png'
  },
  {
    id: 'glasses1',
    name: 'Sunglasses',
    type: 'glasses',
    src: '/glasses1.png'
  },
  {
    id: 'shirt1',
    name: 'T-Shirt',
    type: 'clothing',
    src: '/shirt1.png'
  },
  {
    id: 'costume1',
    name: 'Princess',
    type: 'clothing',
    src: '/costume1.png'
  },
  {
    id: 'costume2',
    name: 'Superhero',
    type: 'clothing',
    src: '/costume2.png'
  }
];

// Placeholder data for memory cards
const cards: Card[] = [
  {
    pairId: 1,
    image: '/stitch1.png'
  },
  {
    pairId: 2,
    image: '/stitch2.png'
  },
  {
    pairId: 3,
    image: '/stitch3.png'
  },
  {
    pairId: 4,
    image: '/stitch4.png'
  },
  {
    pairId: 5,
    image: '/stitch5.png'
  },
  {
    pairId: 6,
    image: '/stitch6.png'
  }
];

const gameData = {
  accessories,
  cards
};

export default gameData;