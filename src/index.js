import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Server, Model } from "miragejs"

new Server({
  models: {
    movie: Model,
  },

  seeds(server) {
    server.create("movie", { id: 1, name: 'Inception', year: 2010 })
    server.create("movie", { id: 2, name: 'Interstellar', year: 2014 })
    server.create("movie", { id: 3, name: 'Dunkirk', year: 2017 })
  },

  routes() {
    this.namespace = 'api';

    this.get('/movies', (schema) => {
      return schema.movies.all();
    });

    this.post("/movies", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.reminders.create(attrs);
    });

    this.delete("/movies/:id", (schema, request) => {
      let id = request.params.id;
      return schema.reminders.find(id).destroy();
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
