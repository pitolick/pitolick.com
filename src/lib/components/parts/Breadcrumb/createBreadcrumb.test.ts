import { describe, expect, test, vi } from 'vitest';
import { createBreadcrumb } from './createBreadcrumb';

// tdk.tsをモック化
vi.mock('$lib/config', () => {
	const tdk = {
		'/': {
			title: 'Home'
		},
		'/example': {
			title: 'Example Title',
			description: 'Example Description',
			keywords: 'example, keywords'
		},
		'/example/child': {
			title: 'Example Child Title',
			description: 'Example Child Description',
			keywords: 'example, child, keywords'
		}
	};

	return {
		tdk
	};
});

describe('createBreadcrumb', () => {
	test('対応する名前を持つパスの配列を返す', () => {
		const pathname = '/example/child';
		const expected = [
			{ path: '/', name: 'Home' },
			{ path: '/example', name: 'Example Title' },
			{ path: '/example/child', name: 'Example Child Title' }
		];

		const result = createBreadcrumb(pathname);
		console.log(result);

		expect(result).toEqual(expected);
	});

	test('pathnameが空の場合、トップページの配列を返す', () => {
		const pathname = '';
		const expected = [{ path: '/', name: 'Home' }];

		const result = createBreadcrumb(pathname);

		expect(result).toEqual(expected);
	});
});
