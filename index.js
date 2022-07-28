const express = require('express');
const cors = require('cors');
const server = express();
const port = process.env.PORT || 5050;
const stock = require('./src/data/stock/stock.json');
const products = require('./src/data/products/products.json');

server.use(cors());

server.get('/stock', (req, res) => {
    return res.json({stock});
});

server.get('/products', (req, res) => {
    return res.json({products});
});

// rodar minha api em produção


server.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);

