/**
 * Breadcrumbコンポーネントのテスト
 */
import { describe, expect, test, vi } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import Breadcrumb from './Breadcrumb.svelte';

// createBreadcrumbをモック化
vi.mock('$lib/components/parts/Breadcrumb/createBreadcrumb', () => {
	return {
		createBreadcrumb: (pathname: string) => {
			if (pathname === '/example/child') {
				return [
					{ path: '/', name: 'Home' },
					{ path: '/example', name: 'Example Title' },
					{ path: '/example/child', name: 'Example Child Title' }
				];
			}

			return [{ path: '/', name: 'Home' }];
		}
	};
});

// $app/storesのモック化
vi.mock('$app/stores', () => {
	return {
		page: {
			subscribe: vi.fn().mockImplementation((callback) => {
				callback({ url: { pathname: '/example/child' } });
				return vi.fn();
			})
		}
	};
});

describe('Breadcrumbコンポーネント', () => {
	test('Breadcrumbコンポーネントが正しく動作すること', () => {
		render(Breadcrumb);

		const breadcrumb = screen.getByRole('list');
		const items = within(breadcrumb).getAllByRole('listitem');

		expect(items).toHaveLength(3);
		expect(items[0]).toHaveTextContent('Home');
		expect(items[1]).toHaveTextContent('Example Title');
		expect(items[2]).toHaveTextContent('Example Child Title');
	});
});
