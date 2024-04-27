<script lang="ts">
	// @ts-nocheck
	import { PUBLIC_GTM_ID } from '$env/static/public';
	import { onMount, afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import { tdk } from '$lib/config';

	if (PUBLIC_GTM_ID) {
		// CSRページ遷移時に前のページURLを保持するための配列
		const previousPageUrl: { url: string; path: string }[] = [];

		/**
		 * GoogleTagManagerのスクリプトを読み込む
		 */
		onMount(() => {
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', PUBLIC_GTM_ID);
		});

		/**
		 * CSRページ遷移時にデータレイヤーにページ情報を送信
		 */
		afterUpdate(() => {
			const pageTitle = tdk[$page.url.pathname]?.title || 'Untitled';
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				event: 'csr_pageview',
				pageUrl: $page.url.href,
				pagePath: $page.url.pathname,
				pageTitle: pageTitle,
				previousPageUrl: previousPageUrl[0]?.url,
				previousPagePath: previousPageUrl[0]?.path
			});

			// previousPageUrlの末尾に現在のページURLを追加
			previousPageUrl.push({ url: $page.url.href, path: $page.url.pathname });

			// previousPageUrlの要素数が1以上の場合、先頭の要素を削除
			if (previousPageUrl.length > 1) {
				previousPageUrl.shift();
			}
		});
	}
</script>
