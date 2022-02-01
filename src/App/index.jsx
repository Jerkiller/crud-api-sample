import React from 'react';
import { MovieList } from '../MovieList';
import { AddMovie } from '../AddMovie';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddMovie />
        <MovieList />
      </header>
    </div>
  );
}

export { App };
