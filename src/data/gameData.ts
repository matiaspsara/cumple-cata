import { Accessory, Card } from '../types';

// Placeholder data for accessories
const accessories: Accessory[] = [
  {
    id: 'hat1',
    name: 'Party Hat',
    type: 'hat',
    src: import.meta.env.BASE_URL + 'images/hat1.png'
  },
  {
    id: 'hat2',
    name: 'Cowboy Hat',
    type: 'hat',
    src: import.meta.env.BASE_URL + 'images/hat2.png'
  },
  {
    id: 'glasses1',
    name: 'Sunglasses',
    type: 'glasses',
    src: import.meta.env.BASE_URL + 'images/glasses1.png'
  },
  {
    id: 'glasses2',
    name: 'Sunglasses',
    type: 'glasses',
    src: import.meta.env.BASE_URL + 'images/glasses2.png'
  },
  {
    id: 'shorts1',
    name: 'Short',
    type: 'clothing',
    src: import.meta.env.BASE_URL + 'images/shorts1.png'
  },
  {
    id: 'shoeR',
    name: 'shoeR',
    type: 'clothing',
    src: import.meta.env.BASE_URL + 'images/shoeR.png'
  },
  {
    id: 'shoeL',
    name: 'shoeL',
    type: 'clothing',
    src: import.meta.env.BASE_URL + 'images/shoeL.png'
  },
  {
    id: 'shoe2R',
    name: 'shoe2R',
    type: 'clothing',
    src: import.meta.env.BASE_URL + 'images/shoe2R.png'
  },
  {
    id: 'shoe2L',
    name: 'shoe2L',
    type: 'clothing',
    src: import.meta.env.BASE_URL + 'images/shoe2L.png'
  }
];

// Placeholder data for memory cards
const cards: Card[] = [
  {
    pairId: 1,
    image: import.meta.env.BASE_URL + 'images/florcata1.png'
  },
  {
    pairId: 2,
    image: import.meta.env.BASE_URL + 'images/florcata2.png'
  },
  {
    pairId: 3,
    image: import.meta.env.BASE_URL + 'images/stitch3.png'
  },
  {
    pairId: 4,
    image: import.meta.env.BASE_URL + 'images/stitch4.png'
  },
  {
    pairId: 5,
    image: import.meta.env.BASE_URL + 'images/stitch5.png'
  },
  {
    pairId: 6,
    image: import.meta.env.BASE_URL + 'images/stitch6.png'
  }
];

const gameData = {
  accessories,
  cards
};

export default gameData;