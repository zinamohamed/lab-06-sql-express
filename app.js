// import expresslibrary //
const express = require('express');
// create the 'app'//
const app = express();
const cors = require('cors');


// import our data
const { products } = require('./data.js');

app.use(cors());


app.get('/products', (_req, res) => {
    
    // eslint-disable-next-line no-console
    console.log(products);

    res.json({ results: products });
});

app.get('/products/:id', (req, res) => {
  
    const id = Number(req.params.id);

    const selectedProduct = products
        .find((item) => item.sid === id);

    res.json({ results: selectedProduct });
});

module.exports = {
    app
};