/**
 * Cardコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import Card from './Card.svelte';
import CardTest from './Card.test.svelte';

describe('Cardコンポーネント', () => {
	test('Cardコンポーネントのslotが正しく動作すること', () => {
		render(CardTest, {
			img: {
				src: 'https://via.placeholder.com/150',
				alt: 'Placeholder Image',
				width: 150,
				height: 150
			},
			title: 'Card Title'
		});

		const card = screen.getByRole('heading', { name: 'slot' });
		const child = within(card).getByTestId('child');

		expect(child).toBeInTheDocument();
	});

	test('Cardコンポーネントのtitle属性が正しく動作すること', () => {
		render(Card, {
			img: {
				src: 'https://via.placeholder.com/150',
				alt: 'Placeholder Image',
				width: 150,
				height: 150
			},
			title: 'Card Title'
		});

		const card = screen.getByRole('heading', { name: 'Card Title' });

		expect(card).toHaveTextContent('Card Title');
	});

	test('Cardコンポーネントのimg属性が正しく動作すること', () => {
		render(Card, {
			img: {
				src: 'https://via.placeholder.com/150',
				alt: 'Placeholder Image',
				width: 150,
				height: 150
			},
			title: 'Card Title'
		});

		const img = screen.getByRole('img', { name: 'Placeholder Image' });

		expect(img).toHaveAttribute('src', 'https://via.placeholder.com/150');
		expect(img).toHaveAttribute('alt', 'Placeholder Image');
		expect(img).toHaveAttribute('width', '150');
		expect(img).toHaveAttribute('height', '150');
	});
});
