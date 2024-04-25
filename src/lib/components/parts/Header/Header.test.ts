/**
 * Headerコンポーネントのテスト
 */
import { describe, expect, test, vi } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import Header from './Header.svelte';

// $app/storesのモック化
vi.mock('$app/stores', () => {
	return {
		page: {
			subscribe: vi
				.fn()
				.mockImplementationOnce((callback) => {
					callback({ url: { pathname: '/' } });
					return vi.fn();
				})
				.mockImplementationOnce((callback) => {
					callback({ url: { pathname: '/example' } });
					return vi.fn();
				})
		}
	};
});

// Navigationコンポーネントのモック化
vi.mock('./components/Navigation.svelte');

// Breadcrumbコンポーネントのモック化
vi.mock('$lib/components/parts/Breadcrumb/Breadcrumb.svelte');

describe('Headerコンポーネント', () => {
	test('Headerコンポーネントが正しく動作すること', () => {
		render(Header);

		const header = screen.getByRole('banner');
		const heading = within(header).getByRole('heading', { name: 'ぴいてっく' });

		expect(header).toBeInTheDocument();
		expect(heading).toBeInTheDocument();
	});

	test('ロゴのタグがpタグに変わっていること', () => {
		render(Header);

		const header = screen.getByRole('banner');
		console.log('header', header.innerHTML);

		// h1タグがpタグに変わっている
		expect(header.querySelector('p a img')).toBeInTheDocument();
	});
});
