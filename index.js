const express = require('express');
const cors = require('cors');
const server = express();
const port = process.env.PORT || 5050;
const stock = require('./src/data/stock/stock.json');
const products = require('./src/data/products/products.json');

server.use(cors());

var corsOptions = {
    origin: 'https://fastfruit-ecommerce.vercel.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

server.get('/stock',cors(corsOptions), (req, res, next) => {
    return res.json({stock});
});

server.get('/products/:id', cors(corsOptions), (req, res) => {
    return res.json({products});
});

// rodar minha api em produção


server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
}
);



