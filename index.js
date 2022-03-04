'use strict';

const currencyData = require('./currency-data.json');

const methods = {
  getEmojiByCurrencyCode: currencyCode => {
    if (!currencyCode) {
      throw new Error('Expected a currency code as the argument (example: CAD)');
    }

    return currencyData[currencyCode.toUpperCase()];
  },

  get currencyData() {
    return currencyData;
  },
};

module.exports = methods;
