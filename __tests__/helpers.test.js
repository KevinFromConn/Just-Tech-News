const { test, expect } = require("@jest/globals");
const { format_url } = require("../utils/helpers");
const { format_date } = require("../utils/helpers");
const { format_plural } = require("../utils/helpers");

test("format_date() returns a date string", () => {
  const date = new Date("2021-08-18 16:42:00");

  expect(format_date(date)).toBe("8/18/2021");
});

test("format_plural() correctly pluralizes words", () => {
  expect(format_plural("tiger", 2)).toBe("tigers");
  expect(format_plural("lion", 1)).toBe("lion");
});

test("format_url() returns a simplified url string", () => {
    const url1 = format_url("http://test.com/page/1");
    const url2 = format_url("https://www.coolstuff.com/abcdefg/");
    const url3 = format_url("https://www.google.com?q=hello");

    expect(url1).toBe("test.com");
    expect(url2).toBe("coolstuff.com");
    expect(url3).toBe("google.com");
});
