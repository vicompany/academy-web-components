const getRate = (min, max) => {
    const now = Date.now() / 1000;
    const t = now / 600;

    const random = (Math.sin(t) + 1) * 0.5;

    return random * (max - min) + min;
};

const createTicker = (ticker, rateMin = 1, rateMax = 2) => {
    const update = () => {
        ticker.dataset.rate = getRate(rateMin, rateMax);
    };

    let interval;

    return {
        start() {
            if (interval) {
                this.stop();
            }

            interval = setInterval(update, 500);
        },

        stop() {
            if (!interval) {
                return;
            }

            clearInterval(interval);
            interval = null;
        },
    };
};