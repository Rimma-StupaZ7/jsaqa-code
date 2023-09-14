const { test, expect } = require("@playwright/test");
const { email, password } = require("../user.js");

test("Успешная авторизация", async ({ page }) => {
  // Go to https://netology.ru/
  await page.goto("https://netology.ru/");
  // Click text=Войти
  await page.click("text=Войти");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(email);
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
  // Fill [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').fill(password);
  // Click [data-testid="login-submit-btn"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/profile' }*/),
    page.click('[data-testid="login-submit-btn"]'),
  ]);
  await page.click("text=Расписание занятий");
  await expect(page).toHaveURL("https://netology.ru/profile/united-calendar");
});

test("Неуспешная авторизация", async ({ page }) => {
  // Go to https://netology.ru/
  await page.goto("https://netology.ru/");
  // Click text=Войти
  await page.click("text=Войти");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', "gfhfghf");
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', "gfhfghf@mail.ru");
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', "234423trgfgh652335");
  // Click [data-testid="login-submit-btn"]
  await page.click('[data-testid="login-submit-btn"]');
  // Click [data-testid="login-error-hint"]
  await page.click('[data-testid="login-error-hint"]');
  await expect(page.locator('[data-testid="login-error-hint"]')).toContainText(
    "Вы ввели неправильно логин или пароль"
  );
});
