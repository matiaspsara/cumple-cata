export interface Accessory {
  id: string;
  name: string;
  type: 'hat' | 'glasses' | 'clothing';
  src: string;
}

export interface Card {
  pairId: number;
  image: string;
}