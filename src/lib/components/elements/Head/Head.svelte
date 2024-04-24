<script lang="ts">
	import { createTDK } from './createTDK';
	import { page } from '$app/stores';

	const tdk = createTDK($page.url.pathname);
</script>

<svelte:head>
	<title>{tdk.title}</title>
	{#if tdk.description}
		<meta name="description" content={tdk.description} />
	{/if}
	{#if tdk.keywords}
		<meta name="keywords" content={tdk.keywords} />
	{/if}
</svelte:head>
