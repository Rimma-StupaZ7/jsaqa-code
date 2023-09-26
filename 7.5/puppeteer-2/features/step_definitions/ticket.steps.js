const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru${string}`, {
    setTimeout: 60000,
  });
});

When("user select date {string}", async function (string) {
  return await clickElement(this.page, string);
});

When("user select movie {string}", async function (string) {
  return await clickElement(this.page, string);
});

When("user choose a seat {string}", async function (string) {
  return await clickElement(this.page, string);
});

When("user orders ticket {string}", async function (string) {
  return await clickElement(this.page, string);
});

Then("user sees button {string}", async function (string) {
  const actual = await getText(
    this.page,
    "body > main > section > div > button"
  );
  const expected = await string;
  expect(actual).contains(expected);
});

Then("user sees inactive button {string}", async function (string) {
  const actual = await getText(this.page, "body > main > section > button");
  const expected = await string;
  expect(actual).contains(expected);
});
