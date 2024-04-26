/**
 * MainVisualコンポーネントのテスト
 */
import { describe, expect, test, vi } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import MainVisual from './MainVisual.svelte';
import MainVisualTest from './MainVisual.test.svelte';

// $app/storesのモック化
vi.mock('$app/stores', () => {
	return {
		page: {
			subscribe: vi
				.fn()
				.mockImplementationOnce((callback) => {
					callback({ url: { pathname: '/example' } });
					return vi.fn();
				})
				.mockImplementation((callback) => {
					callback({ url: { pathname: '/' } });
					return vi.fn();
				})
		}
	};
});

// tdkのモック化
vi.mock('$lib/config/tdk', () => {
	return {
		tdk: {
			'/': {
				title: 'Home'
			},
			'/example': {
				title: 'Example'
			}
		}
	};
});

describe('MainVisualコンポーネント', () => {
	test('MainVisualコンポーネントのslotの初期値が正しく動作すること', () => {
		render(MainVisual);

		const heading = screen.getByRole('heading');
		const child = within(heading).getByText('Example');

		expect(child).toBeInTheDocument();
	});

	test('MainVisualコンポーネントのslotが正しく動作すること', () => {
		render(MainVisualTest);

		const heading = screen.getByRole('heading');
		const child = within(heading).getByTestId('child');

		expect(child).toBeInTheDocument();
	});

	test('MainVisualコンポーネントが正しく動作すること', () => {
		render(MainVisual);

		const mainVisual = screen.getByRole('img');
		const heading = screen.getByRole('heading');
		const child = within(heading).getByText('Home');

		expect(mainVisual).toBeInTheDocument();
		expect(child).toBeInTheDocument();
	});

	test('MainVisualコンポーネントのsrc属性が正しく動作すること', () => {
		render(MainVisual, { src: 'https://example.com/image.jpg' });

		const mainVisual = screen.getByRole('img');

		expect(mainVisual).toHaveAttribute('src', 'https://example.com/image.jpg');
	});
});
