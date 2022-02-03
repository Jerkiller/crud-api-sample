import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { createMovie } from '../services/movieService';
import { moviesAtom } from '../store/moviesAtom';

export const useNewMovie = () => {
  const [movie, setMovie] = useState({ id: null, name: '', year: '' });
  const setMovieList = useSetRecoilState(moviesAtom);

  const submit = () => {
    const movieWithId = {
      ...movie,
      id: Math.round(Math.random() * 100000),
    };
    createMovie(movieWithId);
    setMovieList((ml) => ([...ml, movieWithId]));
  };

  const setMovieName = (name) => { setMovie({ ...movie, name }); };
  const setMovieYear = (year) => { setMovie({ ...movie, year }); };

  return {
    setMovieName, setMovieYear, submit,
  };
};
