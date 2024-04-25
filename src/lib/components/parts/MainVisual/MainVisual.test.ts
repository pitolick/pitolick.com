/**
 * MainVisualコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import MainVisual from './MainVisual.svelte';
import MainVisualTest from './MainVisual.test.svelte';

describe('MainVisualコンポーネント', () => {
	test('MainVisualコンポーネントのslotが正しく動作すること', () => {
		render(MainVisualTest);

		const heading = screen.getByRole('heading');
		const child = within(heading).getByTestId('child');

		expect(child).toBeInTheDocument();
	});

	test('MainVisualコンポーネントが正しく動作すること', () => {
		render(MainVisual);

		const mainVisual = screen.getByRole('img');

		expect(mainVisual).toBeInTheDocument();
	});

	test('MainVisualコンポーネントのsrc属性が正しく動作すること', () => {
		render(MainVisual, { src: 'https://example.com/image.jpg' });

		const mainVisual = screen.getByRole('img');

		expect(mainVisual).toHaveAttribute('src', 'https://example.com/image.jpg');
	});
});
