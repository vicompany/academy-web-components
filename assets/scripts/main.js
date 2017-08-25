const getRate = (min, max) => {
    const now = Date.now() / 1000;
    const t = now / 600;

    const random = (Math.sin(t) + 1) * 0.5;

    return random * (max - min) + min;
};

const ratePanel = (rateMin = 1, rateMax = 2) => {
    return (ratePanel) => {
        const update = () => {
            ratePanel.dataset.rate = getRate(rateMin, rateMax);
        };

        setInterval(update, 500);
    };
};