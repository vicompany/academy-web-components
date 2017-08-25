const express = require('express');
const opn = require('opn');
const rateRepository = require('./repositories/rate');

const app = express();
const server = app.listen();

app.get('/rate/:currencyBase/:currencyTransaction', (req, res, next) => {
    res.json(rateRepository(req.params.currencyBase, req.params.currencyTransaction));
});

app.use(express.static('public'));

if (server && server.address()) {
    opn(`http://localhost:${server.address().port}`);
}

module.exports = app;