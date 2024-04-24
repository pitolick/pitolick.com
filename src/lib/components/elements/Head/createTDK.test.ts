import { describe, expect, test, vi } from 'vitest';
import { createTDK } from './createTDK';

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
		}
	};

	return {
		tdk
	};
});

describe('createTDK', () => {
	test('ルートパスの場合、デフォルトのTDKが返されること', () => {
		const path = '/';
		const expectedTDK = {
			title: 'ぴいてっく',
			description: undefined,
			keywords: undefined
		};

		const result = createTDK(path);

		expect(result).toEqual(expectedTDK);
	});

	test('パスが一致する場合、特定のタイトルを持つTDKが返されること', () => {
		const path = '/example';
		const expectedTDK = {
			title: 'Example Title | ぴいてっく',
			description: 'Example Description',
			keywords: 'example, keywords'
		};

		const result = createTDK(path);

		expect(result).toEqual(expectedTDK);
	});

	test('パスが一致しない場合、デフォルトのTDKが返されること', () => {
		const path = '/unknown';
		const expectedTDK = {
			title: 'ぴいてっく',
			description: undefined,
			keywords: undefined
		};

		const result = createTDK(path);

		expect(result).toEqual(expectedTDK);
	});
});
