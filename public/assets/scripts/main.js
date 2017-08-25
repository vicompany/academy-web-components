const createRatePanel = (settings) => {
    const ratePanel = document.createElement('x-rate-panel');

    ratePanel.dataset.currencyBase = settings.currencyBase;
    ratePanel.dataset.currencyTransaction = settings.currencyTransaction;
    ratePanel.dataset.dataUrl = `/rate/${settings.currencyBase}/${settings.currencyTransaction}`;

    return ratePanel;
};
