/**
 * Footerコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Footer from './Footer.svelte';

describe('Footerコンポーネント', () => {
	test('Footerコンポーネントが正しく動作すること', () => {
		render(Footer);

		const footer = screen.getByRole('contentinfo');

		expect(footer).toBeInTheDocument();
	});
});
