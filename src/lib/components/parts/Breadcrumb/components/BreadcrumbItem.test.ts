/**
 * BreadcrumbItemコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import BreadcrumbItem from './BreadcrumbItem.svelte';
import BreadcrumbItemTest from './BreadcrumbItem.test.svelte';

describe('BreadcrumbItemコンポーネント', () => {
	test('BreadcrumbItemコンポーネントのslotが正しく動作すること', () => {
		render(BreadcrumbItemTest, {
			index: 1
		});

		const breadcrumbItem = screen.getByRole('listitem');
		const child = within(breadcrumbItem).getByTestId('child');

		expect(child).toBeInTheDocument();
	});

	test('BreadcrumbItemコンポーネントのindex属性が正しく動作すること', () => {
		render(BreadcrumbItem, {
			index: 1
		});

		const breadcrumbItem = screen.getByRole('listitem');
		const metaElement = breadcrumbItem.querySelector('meta');

		expect(metaElement?.getAttribute('content')).toBe('1');
	});

	test('BreadcrumbItemコンポーネントのhome属性が正しく動作すること', () => {
		render(BreadcrumbItem, {
			index: 1,
			home: true
		});

		const breadcrumbItem = screen.getByRole('listitem');
		const child = breadcrumbItem.querySelector('svg');

		expect(child?.getAttribute('class')).toBe('me-2.5 h-3 w-3');
	});

	test('BreadcrumbItemコンポーネントのhref属性が正しく動作すること', () => {
		render(BreadcrumbItem, {
			index: 1,
			href: 'https://google.com'
		});

		const breadcrumbItem = screen.getByRole('link');

		expect(breadcrumbItem).toHaveAttribute('href', 'https://google.com');
	});
});
