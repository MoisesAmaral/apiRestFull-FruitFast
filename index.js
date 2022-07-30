const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5050;
const stock = require('./src/data/stock/stock.json');
const products = require('./src/data/products/products.json');

app.use(cors());


app.get('/stock',(req, res) => {
    return res.json({stock});
});

app.get('/products', (req, res) => {
    return res.json({products});
});

// rodar minha api em produção


app.listen(port, () => {
    console.log(`app running on port http://localhost:${port}`);
}
);



