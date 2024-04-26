/**
 * MainVisualコンポーネントのテスト
 */
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import MainVisual from './MainVisual.svelte';

describe('MainVisualコンポーネント', () => {
	test('MainVisualコンポーネントが正しく動作すること', () => {
		render(MainVisual);

		const mainVisual = screen.getByRole('img', { name: 'Webサイト制作のイメージ画像' });
		const heading = screen.getByRole('heading', {
			name: 'あなたが今一番必要としている Webサイトをお届けします'
		});

		expect(mainVisual).toBeInTheDocument();
		expect(heading).toBeInTheDocument();
	});
});
