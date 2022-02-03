import { atom } from 'recoil';

export const moviesAtom = atom({
  key: 'movies',
  default: [],
});
