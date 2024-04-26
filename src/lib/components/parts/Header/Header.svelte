<script lang="ts">
	import { page } from '$app/stores';
	import Navigation from './components/Navigation.svelte';
	import logo from '$lib/assets/images/logo/1x/logo_white.png';
	import { Breadcrumb } from '$lib/components/parts';

	// トップページはロゴをh1タグで表示
	$: logoTag = $page?.url.pathname === '/' ? 'h1' : 'p';
</script>

<header id="header" class="absolute left-0 right-0 top-0 z-20">
	<div class="container relative flex items-center justify-between py-2 md:py-4">
		<div>
			<svelte:element this={logoTag}>
				<a href="/"><img class="h-6 w-auto md:h-10" src={logo} alt="ぴいてっく" /></a>
			</svelte:element>
		</div>
		<div><Navigation /></div>
	</div>

	{#if $page && $page.url.pathname !== '/'}
		<div class="container">
			<Breadcrumb />
		</div>
	{/if}
</header>
