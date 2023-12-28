const { getEmojiByCountryCode } = require("./index");
const { getEmojiByCurrencyCode } = require("./index");

describe("getEmojiByCountryCode", () => {
  it("should return null if no country code is passed", () => {
    expect(getEmojiByCountryCode()).toBeNull();
  });

  it("should return the emoji for the country code passed", () => {
    expect(getEmojiByCountryCode("us")).toBe("🇺🇸");
    expect(getEmojiByCountryCode("US")).toBe("🇺🇸");
    expect(getEmojiByCountryCode("FR")).toBe("🇫🇷");
  });
});

describe("getEmojiByCurrencyCode", () => {
  it("should return null if no currency code is passed", () => {
    expect(getEmojiByCurrencyCode()).toBeNull();
  });

  it("should return the emoji for the currency code passed", () => {
    expect(getEmojiByCurrencyCode("usd")).toBe("🇺🇸");
    expect(getEmojiByCurrencyCode("EUR")).toBe("🇪🇺");
    expect(getEmojiByCurrencyCode("GBP")).toBe("🇬🇧");
  });
});
