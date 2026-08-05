const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

app.get('/product/:category/:id', (req, res) => {
    const category = req.params.category;
    const productId = req.params.id;
    console.log(`Category: ${category}, Product ID: ${productId}`);
    res.send(`Category: ${category}, Product ID: ${productId}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});