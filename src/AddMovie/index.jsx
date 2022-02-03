import React, {useState} from 'react';
import { PrimaryButton } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';

export const AddMovie = () => {
  const [movie, setMovie] = useState({id: null, name: '', year: ''});
  const submit = () => {
    const options = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie) // body data type must match "Content-Type" header
    };


    fetch('/api/movies', options)
      .then((x) => x.json())
      .then(movie);
  };

  const deleteHandler = () => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    fetch('/api/movies/'+1, options)
      .then((x) => x.json())
      .then(movie);
  };

  return ( <div>
    <TextField label="Name" placeholder='Name' onChange={(e) => setMovie({...movie, name: e.target.value})} />
    <TextField label="Year" placeholder='Year' onChange={(e) => setMovie({...movie, year: Number(e.target.value)})} />
    <PrimaryButton onClick={submit}>OK</PrimaryButton>

    &nbsp;
    <PrimaryButton onClick={deleteHandler}>XXX</PrimaryButton>
  </div> );
}
