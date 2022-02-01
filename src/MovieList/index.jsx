import React, { useEffect, useState } from 'react';

export const MovieList = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/movies')
      .then((x) => x.json())
      .then(setData);
  }, []);

  if (data == null)
    return 'Loading...';

  return (
    <ul>
      {data != null && data.movies.map((film) => {
        console.log(film);
        return <li key={film.id}>
          <strong>{film.name}</strong>
          &nbsp;&nbsp;
          <small><em>{film.year}</em></small>
        </li>
      })}
    </ul>
  );
};
