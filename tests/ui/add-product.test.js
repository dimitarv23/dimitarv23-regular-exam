const { test, expect } = require("@playwright/test");

test("Check add products page", async ({ page }) => {
    await page.goto("https://dimitarv23-cookbook.onrender.com/Add-Product");
    const form = await page.$("input");
    expect(form).toBeTruthy();
});
