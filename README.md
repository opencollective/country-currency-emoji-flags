## country-currency-emoji-flags

This small package helps to obtain emojis based on the currency
code ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)).

### Install

> npm install --save country-currency-emoji-flags

### Usage

```js
import {getEmojiByCountryCode, getEmojiByCurrencyCode, countryData, currencyData} from 'country-currency-emoji-flags';

// Currency lookup
emojiFlags.getEmojiByCurrencyCode('CAD');
// => "🇨🇦"

// Country lookup
emojiFlags.getEmojiByCountryCode('CA');
// => "🇨🇦"

// entire currency code set
emojiFlags.currencyData;

// entire country code set
emojiFlags.countryData;

// get country codes by country name
emojiFlags.getCountryCodeByCountryName('Canada'); 
// => "CA"
```
