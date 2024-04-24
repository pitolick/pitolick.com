/**
 * BreadcrumbParentコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import BreadcrumbParentTest from './BreadcrumbParent.test.svelte';

describe('BreadcrumbParentコンポーネント', () => {
	test('BreadcrumbParentコンポーネントのslotが正しく動作すること', () => {
		render(BreadcrumbParentTest);

		const breadcrumb = screen.getByRole('list');
		const child = within(breadcrumb).getByTestId('child');

		expect(child).toBeInTheDocument();
	});
});
