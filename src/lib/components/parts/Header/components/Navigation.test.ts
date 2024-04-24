/**
 * Navigationコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import Navigation from './Navigation.svelte';

describe('Navigationコンポーネント', () => {
	test('Navigationコンポーネントが正しく動作すること', () => {
		render(Navigation, { navList: [{ path: '/', name: 'Home' }] });

		const navigation = screen.getByRole('navigation');
		const items = within(navigation).getAllByRole('listitem');

		expect(items).toHaveLength(1);
		expect(items[0]).toHaveTextContent('Home');
	});

	test('toggleMenuメソッドが正しく動作すること', async () => {
		render(Navigation, { navList: [{ path: '/', name: 'Home' }] });

		const button = screen.getByRole('button');
		const navigation = screen.getByRole('navigation');
		const menu = navigation.querySelector('#navbar-default');

		expect(button.querySelector('.sr-only')).toHaveTextContent('Open main menu');
		expect(menu).toHaveClass('hidden');

		await button.click();

		expect(button.querySelector('.sr-only')).toHaveTextContent('Close main menu');
		expect(menu).not.toHaveClass('hidden');
	});
});
