export const getMovies = () => fetch('/api/movies')
  .then((x) => x.json());

const baseOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const createMovie = (movie) => {
  const options = {
    ...baseOptions,
    method: 'POST',
    body: JSON.stringify(movie),
  };
  return fetch('/api/movies', options)
    .then((x) => x.json());
};

export const editMovie = (movie) => {
  const options = {
    ...baseOptions,
    method: 'PUT',
    body: JSON.stringify(movie),
  };
  return fetch(`/api/movies/${movie.id}`, options)
    .then((x) => x.json());
};

export const deleteMovie = (movie) => {
  const options = {
    ...baseOptions,
    method: 'DELETE',
  };
  return fetch(`/api/movies/${movie.id}`, options);
};
