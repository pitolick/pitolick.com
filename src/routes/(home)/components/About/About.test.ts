/**
 * Aboutコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import About from './About.svelte';

describe('Aboutコンポーネント', () => {
	test('Aboutコンポーネントが正しく動作すること', () => {
		render(About);

		const heading = screen.getByRole('heading', { name: 'ぴいてっくはこんな人' });

		expect(heading).toBeInTheDocument();
	});
});
