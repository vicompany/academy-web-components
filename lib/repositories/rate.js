const Alea = require('alea');
const SimplexNoise = require('simplex-noise');

const defaultSettings = {
    min: 1,
    max: 2,
    precision: 5,
};

const pairs = {
    'EUR/USD': {
        min: 1.1,
        max: 1.2,
    },
    'EUR/GBP': {
        min: 0.91,
        max: 0.92,
    },
    'EUR/JPY': {
        min: 120,
        max: 130,
        precision: 6,
    },
    'BTC/EUR': {
        min: 3500,
        max: 3700,
        precision: 2,
    },
};

const noiseGenerator = {
    get(currencyBase, currencyTransaction, settings = {}) {
        const currencyPair = `${currencyBase}/${currencyTransaction}`;

        if (!this[currencyPair]) {
            this[currencyPair] = new SimplexNoise(new Alea(currencyPair));
        }

        const now = Date.now() / 1000;
        const frequency = 1 / 10000;
        const theta = now * Math.PI * 2 * frequency;
        const noise = this[currencyPair].noise2D(
            Math.sin(theta),
            Math.cos(theta)
        );

        return noise * (settings.max - settings.min) + settings.min;
    },
};

module.exports = (currencyBase, currencyTransaction) => {
    const currencyPair = `${currencyBase}/${currencyTransaction}`;

    const settings = Object.assign(
        {},
        defaultSettings,
        pairs[currencyPair]
    );

    return {
        rate: noiseGenerator.get(currencyBase, currencyTransaction, settings),
        precision: settings.precision,
    };
};