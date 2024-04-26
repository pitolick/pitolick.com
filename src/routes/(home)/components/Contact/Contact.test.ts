/**
 * Contactコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Contact from './Contact.svelte';

describe('Contactコンポーネント', () => {
	test('Contactコンポーネントが正しく動作すること', () => {
		render(Contact);

		const heading = screen.getByRole('heading', { name: 'ぴいてっくに相談する' });

		expect(heading).toBeInTheDocument();
	});
});
