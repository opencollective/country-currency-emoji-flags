## country-currency-emoji-flags

This small package helps to obtain emojis based on country
code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)) or the currency
code ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)).

### Install

> npm install --save country-currency-emoji-flags

### Usage

```js
import {getEmojiByCountryCode, getEmojiByCurrencyCode, countryData, currencyData} from 'country-currency-emoji-flags';

// Country lookup
emojiFlags.getEmojiByCountryCode('CA');
// => { "countryName": "Canada", "emoji": "🇨🇦", countryCode: "CA" }

// Currency lookup
emojiFlags.getEmojiByCurrencyCode('CAD');
// => { "currencyName": "Canadian dollar", "emoji": "🇨🇦", currencyCode: "CAD" }

// entire country code set
emojiFlags.countryData;

// entire currency code set
emojiFlags.currencyData;
```
