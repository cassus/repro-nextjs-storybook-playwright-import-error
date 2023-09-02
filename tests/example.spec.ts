import * as ButtonStories from '../stories/Button.stories';
import { test, expect } from '@playwright/test';

// triggers the playwright error: Cannot read properties of undefined (reading 'location')
// if the following two lines are commented out the tests run fine
import { composeStories } from "@storybook/react";
const {Primary} = composeStories(ButtonStories);



// Default tests from Playwright init
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
