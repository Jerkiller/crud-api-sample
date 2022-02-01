import React, {useState} from 'react';

export const AddMovie = () => {
  const [movie, setMovie] = useState(null);
  const submit = () => {
    fetch('/api/movies')
      .then((x) => x.json())
      .then(movie);
  };
  return ( <div>
    <input onChange={(e) => setMovie(e.target.value)} />
    <button onClick={submit}></button>
  </div> );
}
