/**
 * Headerコンポーネントのテスト
 */
import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
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
vi.mock('$lib/components/parts/Navigation/Navigation', () => {
	return {
		default: {
			render: vi.fn().mockReturnValue(null)
		}
	};
});

describe('Headerコンポーネント', () => {
	test('Headerコンポーネントが正しく動作すること', () => {
		render(Header);

		const heading = screen.getByRole('heading');
		const navigation = screen.getByRole('navigation');

		expect(heading).toBeInTheDocument();
		expect(navigation).toBeInTheDocument();
	});

	test('ロゴのタグがpタグに変わっていること', () => {
		render(Header);

		const banner = screen.getByRole('banner');

		// h1タグがpタグに変わっている
		expect(banner.querySelector('p a img')).toBeInTheDocument();
	});
});
