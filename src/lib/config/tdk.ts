/**
 * TDK
 */
type PathKeys = string;

type TDK = {
	title: string;
	description?: string;
	keywords?: string;
};

export const tdk: { [key: PathKeys]: TDK } = {
	'/': {
		title: 'ホーム'
		// description: 'description',
		// keywords: 'keywords'
	},
	'/contact': {
		title: 'お問い合わせ'
	}
};
