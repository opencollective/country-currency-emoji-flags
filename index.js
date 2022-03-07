'use strict';

const currencyData = require('./currency-data.json');

const methods = {
  getEmojiByCurrencyCode: currencyCode => {
    if (!currencyCode) {
      return null;
    }

    return currencyData[currencyCode.toUpperCase()];
  },

  get currencyData() {
    return currencyData;
  },
};

module.exports = methods;
