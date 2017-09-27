const createRatePanel = (settings) => {
    const ratePanel = document.createElement('x-rate-panel');

    ratePanel.setAttribute('currencyBase', settings.currencyBase);
    ratePanel.setAttribute('currencyTransaction', settings.currencyTransaction);
    ratePanel.setAttribute('dataUrl', `/rate/${settings.currencyBase}/${settings.currencyTransaction}`);

    return ratePanel;
};
