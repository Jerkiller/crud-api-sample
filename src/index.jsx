import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createServer, Model } from 'miragejs';
import { RecoilRoot } from 'recoil';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

createServer({
  models: {
    movie: Model,
  },

  seeds(server) {
    server.create('movie', { id: 1, name: 'Parto col folle', year: 2010 });
    server.create('movie', { id: 2, name: 'Frankenstein Junior', year: 1975 });
    server.create('movie', { id: 3, name: '2 single a nozze', year: 2005 });
    server.create('movie', { id: 4, name: 'Ti presento i miei', year: 2000 });
  },

  routes() {
    this.namespace = 'api';

    this.get('/movies', (schema) => schema.movies.all());

    this.post('/movies', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.movies.create(attrs);
    });

    this.put('/movies/:id', (schema, request) => {
      const { id } = request.params;
      const attrs = JSON.parse(request.requestBody);
      return schema.movies.find(id).update(attrs);
    });

    this.delete('/movies/:id', (schema, request) => {
      const { id } = request.params;
      return schema.movies.find(id).destroy();
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
