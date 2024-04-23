/**
 * Headingコンポーネントのテスト
 */
import '@testing-library/svelte/vitest';
import '@testing-library/jest-dom/vitest';

import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import Heading from './Heading.svelte';
import HeadingTest from './Heading.test.svelte';

describe('Headingコンポーネント', () => {
	test('Headingコンポーネントのslotが正しく動作すること', () => {
		render(HeadingTest);

		const heading = screen.getByRole('heading');
		const child = within(heading).getByTestId('child');

		expect(child).toBeInTheDocument();
	});

	test('Headingコンポーネントのtag属性がデフォルト値のh2であること', () => {
		render(Heading);

		const heading = screen.getByRole('heading', { level: 2 });

		expect(heading).toBeInTheDocument();
	});

	test('Headingコンポーネントのtag属性が正しく動作すること', () => {
		render(Heading, { tag: 'h3' });

		const heading = screen.getByRole('heading', { level: 3 });

		expect(heading).toBeInTheDocument();
	});
});
