'use strict';

const currencyData = require('./currency-data.json');
const countryData = require('./country-data.json');
const find = require('lodash.find');

const methods = {
  getEmojiByCountryCode: countryCode => {
    if (!countryCode) {
      throw new Error('Expected a country code as the argument (example: CA)');
    }

    return find(countryData, data => {
      return data.countryCode === countryCode.toUpperCase();
    });
  },

  getEmojiByCurrencyCode: currencyCode => {
    if (!currencyCode) {
      throw new Error('Expected a currency code as the argument (example: CAD)');
    }

    return find(currencyData, data => {
      return data.currencyCode === currencyCode.toUpperCase();
    });
  },

  get currencyData() {
    return currencyData;
  },

  get countryData() {
    return countryData;
  }
};

module.exports = methods;
