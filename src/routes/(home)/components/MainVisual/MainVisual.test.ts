/**
 * MainVisualコンポーネントのテスト
 */
import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import MainVisual from './MainVisual.svelte';

// MainVisualコンポーネントをモック化
vi.mock('$lib/components/parts/MainVisual/MainVisual.svelte');

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
