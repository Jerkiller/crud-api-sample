import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { editMovie } from '../services/movieService';
import { moviesAtom } from '../store/moviesAtom';

export const useEditMovie = (m) => {
  const [movie, setMovie] = useState(m);
  const setMovieList = useSetRecoilState(moviesAtom);

  const submit = () => {
    editMovie(movie);
    setMovieList((ml) => (ml.map((mo) => (mo.id === movie.id ? movie : mo))));
  };

  const setMovieName = (name) => { setMovie({ ...movie, name }); };
  const setMovieYear = (year) => { setMovie({ ...movie, year }); };

  return {
    setMovieName, setMovieYear, submit, movie,
  };
};
