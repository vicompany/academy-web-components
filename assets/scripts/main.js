const createRateFactory = (min = 1, max = 2, frequency = 1) => {
    return () => {
        const now = Date.now() / 1000;
        const random = (Math.sin(now * frequency) + 1) * .5;

        return random * (max - min) + min;
    };
};

const createRatePanel = (settings, rateRepository = settings.rateRepository) => {
    const ratePanel = document.createElement('x-rate-panel');
    const update = () => {
        ratePanel.dataset.rate = rateRepository();
    };

    Object.assign(ratePanel.dataset, settings);

    setInterval(update, 500);

    return ratePanel;
};