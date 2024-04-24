/**
 * LinkButtonコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import LinkButton from './LinkButton.svelte';

describe('LinkButtonコンポーネント', () => {
	test('LinkButtonコンポーネントのtext属性が正しく動作すること', () => {
		render(LinkButton, {
			text: 'LinkButton',
			href: '#'
		});

		const button = screen.getByRole('link', { name: 'LinkButton' });

		expect(button).toBeInTheDocument();
	});

	test('LinkButtonコンポーネントのhref属性が正しく動作すること', () => {
		render(LinkButton, {
			text: 'LinkButton',
			href: 'https://google.com'
		});

		const button = screen.getByRole('link', { name: 'LinkButton' });

		expect(button).toHaveAttribute('href', 'https://google.com');
	});

	test('LinkButtonコンポーネントのrel属性が正しく動作すること', () => {
		render(LinkButton, {
			text: 'LinkButton',
			href: 'https://google.com',
			rel: 'noopener'
		});

		const button = screen.getByRole('link', { name: 'LinkButton' });

		expect(button).toHaveAttribute('rel', 'noopener');
	});

	test('LinkButtonコンポーネントのtarget属性が正しく動作すること', () => {
		render(LinkButton, {
			text: 'LinkButton',
			href: 'https://google.com',
			targetLink: '_blank'
		});

		const button = screen.getByRole('link', { name: 'LinkButton' });

		expect(button).toHaveAttribute('target', '_blank');
		expect(button).toHaveAttribute('rel', ' noopener noreferrer');
	});

	test('LinkButtonコンポーネントのtarget属性が_blankでrefが設定されているとき正しく動作すること', () => {
		render(LinkButton, {
			text: 'LinkButton',
			href: 'https://google.com',
			rel: 'hoge',
			targetLink: '_blank'
		});

		const button = screen.getByRole('link', { name: 'LinkButton' });

		expect(button).toHaveAttribute('target', '_blank');
		expect(button).toHaveAttribute('rel', 'hoge noopener noreferrer');
	});

	test('LinkButtonコンポーネントのtarget属性が_selfで正しく動作すること', () => {
		render(LinkButton, {
			text: 'LinkButton',
			href: 'https://google.com',
			targetLink: '_self'
		});

		const button = screen.getByRole('link', { name: 'LinkButton' });

		expect(button).toHaveAttribute('target', '_self');
	});

	test('LinkButtonコンポーネントのtarget属性が_parentで正しく動作すること', () => {
		render(LinkButton, {
			text: 'LinkButton',
			href: 'https://google.com',
			targetLink: '_parent'
		});

		const button = screen.getByRole('link', { name: 'LinkButton' });

		expect(button).toHaveAttribute('target', '_parent');
	});

	test('LinkButtonコンポーネントのtarget属性が_topで正しく動作すること', () => {
		render(LinkButton, {
			text: 'LinkButton',
			href: 'https://google.com',
			targetLink: '_top'
		});

		const button = screen.getByRole('link', { name: 'LinkButton' });

		expect(button).toHaveAttribute('target', '_top');
	});
});
