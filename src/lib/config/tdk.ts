/**
 * TDK
 */
type PathKeys = string;

type TDK = {
	title: string;
	description?: string;
	keywords?: string;
};

export const tdk: Record<PathKeys, TDK> = {
	'/': {
		title: 'Home'
		// description: 'description',
		// keywords: 'keywords'
	}
};
