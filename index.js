"use strict";

const currencyData = require("./currency-data.json");
const countryData = require("./country-data.json");

const methods = {
  getEmojiByCountryCode: (countryCode) => {
    if (!countryCode) {
      return null;
    }

    return countryData[countryCode.toUpperCase()];
  },

  getEmojiByCurrencyCode: (currencyCode) => {
    if (!currencyCode) {
      return null;
    }

    return currencyData[currencyCode.toUpperCase()];
  },

  get currencyData() {
    return currencyData;
  },

  get countryData() {
    return countryData;
  },
};

module.exports = methods;
