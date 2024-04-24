/**
 * TDKを生成する
 */
import { tdk } from '$lib/config';

type tdkType = {
	title: string;
	description: string | undefined;
	keywords: string | undefined;
};

/**
 * TDKを生成する
 * @param path pathname
 * @returns tdkType
 */
export const createTDK = (path: string): tdkType => {
	const siteName = 'ぴいてっく';
	const pipe = ' | ';
	const pathname = path;

	// pathnameがルートの場合、siteNameのみをtitleに設定、それ以外はtdk.titleを設定
	const obj: tdkType = {
		title: siteName,
		description: undefined,
		keywords: undefined
	};

	if (pathname === '/') {
		obj.title = siteName;
		tdk['/'].description && (obj.description = tdk['/'].description);
		tdk['/'].keywords && (obj.keywords = tdk['/'].keywords);
	} else {
		// tdkの配列にあるpathがpathnameと一致するものを検索し、一致した場合はtitleに設定
		Object.entries(tdk).forEach(([key, value]) => {
			if (key === pathname) {
				obj.title = value.title + pipe + siteName;
				value.description && (obj.description = value.description);
				value.keywords && (obj.keywords = value.keywords);
			}
		});
	}

	return obj;
};
