const { test, expect } = require("@playwright/test");

test("Check cookbook page", async ({ page }) => {
    await page.goto("https://dimitarv23-cookbook.onrender.com/cookbook");
    const list = await page.$("ul");
    expect(list).toBeTruthy();
});
