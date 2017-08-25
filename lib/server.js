const express = require('express');
const rateRepository = require('./repositories/rate');

const app = express();
const server = app.listen(process.env.PORT || 80);

app.get('/rate/:currencyBase/:currencyTransaction', (req, res, next) => {
    res.json(rateRepository(req.params.currencyBase, req.params.currencyTransaction));
});

app.use(express.static('public'));

if (server && server.address()) {
    console.log(`Listening to: http://localhost:${server.address().port}`);
}

module.exports = app;