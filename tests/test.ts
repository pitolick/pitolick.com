import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	const h1 = await page.$('h1');
	expect(h1).toBeTruthy();
	// await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});
