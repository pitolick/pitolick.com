/**
 * SiteCardコンポーネントのテスト
 */
import '@testing-library/svelte/vitest';
import '@testing-library/jest-dom/vitest';

import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import SiteCard from './SiteCard.svelte';
import SiteCardTest from './SiteCard.test.svelte';

describe('SiteCardコンポーネント', () => {
	test('SiteCardコンポーネントのslotが正しく動作すること', () => {
		render(SiteCardTest, {
			url: 'https://google.com',
			title: 'SiteCard Title',
			with: 360
		});

		const siteCard = screen.getByRole('heading', { name: 'slot' });
		const child = within(siteCard).getByTestId('child');

		expect(child).toBeInTheDocument();
	});

	test('SiteCardコンポーネントのtitle属性が正しく動作すること', () => {
		render(SiteCard, {
			url: 'https://google.com',
			title: 'SiteCard Title',
			with: 360
		});

		const siteCard = screen.getByRole('heading', { name: 'SiteCard Title' });

		expect(siteCard).toHaveTextContent('SiteCard Title');
	});

	test('SiteCardコンポーネントのurl属性が正しく動作すること', () => {
		render(SiteCard, {
			url: 'https://google.com',
			title: 'SiteCard Title',
			with: 360
		});

		// 画像部分とタイトル部分の複数箇所が同じRoleであるため、全てのリンクを取得する
		const links = screen.getAllByRole('link', { name: 'SiteCard Title' });

		links.forEach((link) => {
			expect(link).toHaveAttribute('href', 'https://google.com');
		});
	});
});
