/**
 * Productコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Product from './Product.svelte';

describe('Productコンポーネント', () => {
	test('Productコンポーネントが正しく動作すること', () => {
		render(Product);

		const heading = screen.getByRole('heading', { name: 'ぴいてっくが 運営しているサイト' });

		expect(heading).toBeInTheDocument();
	});
});
