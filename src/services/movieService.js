export const getMovies = () => fetch('/api/movies')
  .then((x) => x.json());

export const createMovie = (movie) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  };
  return fetch('/api/movies', options)
    .then((x) => x.json());
};

export const deleteMovie = (movie) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`/api/movies/${movie.id}`, options);
};
