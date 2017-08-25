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

const getSeed = settings => ((settings.min + settings.max) / 20) % 1;

module.exports = (currencyBase, currencyTransaction) => {
    const settings = Object.assign(
        {},
        defaultSettings,
        pairs[`${currencyBase}/${currencyTransaction}`]
    );

    const {
        max,
        min,
        precision,
    } = settings;

    const now = Date.now() / 1000;
    const seed = getSeed(settings);
    const t = now + seed;
    const random = Math.sin(t);

    return {
        rate: (random * (max - min) + min),
        precision,
    };
};