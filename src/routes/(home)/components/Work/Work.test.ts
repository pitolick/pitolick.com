/**
 * Workコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Work from './Work.svelte';

describe('Workコンポーネント', () => {
	test('Workコンポーネントが正しく動作すること', () => {
		render(Work);

		const heading = screen.getByRole('heading', { name: 'ぴいてっくが お手伝いできること' });

		expect(heading).toBeInTheDocument();
	});
});
