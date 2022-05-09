import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models: {
    posta: Model,
  },

  seeds(server) {
    server.db.loadData({
      postars: [
        {
          id: 1,
          titulo: 'guerra',
          criador: 'douglas',
          conteudo: 'A guerra está destruindo a ucrania'
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/postars', () => {
      return this.schema.all('posta')
    })

    this.post('/postars', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('posta', data)
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
