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
	},
	'/privacy-policy': {
		title: 'プライバシーポリシー'
	},
	'/commerce-law': {
		title: '特定商取引法に基づく表記'
	}
};
