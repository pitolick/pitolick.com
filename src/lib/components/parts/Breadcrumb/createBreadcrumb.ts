/**
 * Create breadcrumb
 * @see https://qiita.com/maaaashi/items/3b744cc142b8650e460d
 */
import { tdk } from '$lib/config';

export type Paths = {
	path: string;
	name: string;
};

/**
 * 指定されたパス名に基づいて、パンくずリストの配列を作成します。
 * @param pathname - パンくずリストを作成するためのパス名。
 * @returns パスと対応する名前を含むパンくずリストオブジェクトの配列。
 */
export const createBreadcrumb = (pathname: string) => {
	let swap_paths: Array<Paths> = [];

	pathname.split('/').forEach((path, index) => {
		path = '/' + path;

		if (index > 1) {
			path = swap_paths[index - 1]['path'] + path;
		}
		swap_paths.push({ path, name: tdk[path]['title'] });
	});

	return (swap_paths = Array.from(new Map(swap_paths.map((o) => [o.path, o])).values()));
};
