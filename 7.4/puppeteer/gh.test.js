let page;

beforeEach(async () => {
  page = await browser.newPage();
  // await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub",
      { timeout: 60000 }
    );
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content", { timeout: 60000 });
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team", { timeout: 60000 });
  });
});

describe("Another titles in Github page. Task_2 Puppeteer before and after hooks", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/pricing");
  });

  test("The h1 header content'", async () => {
    await page.goto("https://github.com/pricing");
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual("Pricing · Plans for every developer · GitHub", {
      timeout: 60000,
    });
  });

  test("The page contains Join for free button", async () => {
    const btnSelector = ".btn-muted-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Join for free", { timeout: 60000 });
  });

  test("The page contains Continue with Team button", async () => {
    const btnSelector = ".js-pricing-upgrade-path.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Continue with Team", { timeout: 60000 });
  });
});
