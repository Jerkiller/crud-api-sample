import React from 'react';
import { MovieList } from '../MovieList';
import { AddMovie } from '../AddMovie';
import './styles.css';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

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
