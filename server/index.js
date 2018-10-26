const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();

app.use(bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
  }).catch( err => console.log(err) );

  app.get('/api/inventory',controller.getAll);
  app.post('/api/product',controller.addProduct)
  //   app.put('api/product',controller.editProduct)
  //   app.delete('api/product',controller.deleteProduct)
  



const port = 4000
app.listen( port, () => { console.log(`Server is a lisening on port ${port}`)});
