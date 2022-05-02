'use strict';

const currencyData = require('./currency-data.json');
const countryData = require('./country-data.json');
const countryCodesByName = require('./country-codes-by-name.json');

const methods = {
  getEmojiByCountryCode: countryCode => {
    if (!countryCode) {
      return null;
    }

    return countryData[countryCode.toUpperCase()];
  },

  getEmojiByCurrencyCode: currencyCode => {
    if (!currencyCode) {
      return null;
    }

    return currencyData[currencyCode.toUpperCase()];
  },

  getCountryCodeByCountryName: countryName => {
    if (!countryName) {
      return null;
    }

    return countryCodesByName[countryName];
  },

  get currencyData() {
    return currencyData;
  },

  get countryData() {
    return countryData;
  },
};

module.exports = methods;
