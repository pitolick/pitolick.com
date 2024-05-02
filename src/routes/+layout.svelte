<script>
	import '../app.css';
	import { Head, GoogleTagManagerBody, GoogleTagManagerHead } from '$lib/components/elements';
	import { Header, Footer } from '$lib/components/parts';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
</script>

<svelte:head>
	<GoogleTagManagerHead />
</svelte:head>

<GoogleTagManagerBody />

<Head />

<Header />
<main id="main">
	<slot></slot>
</main>
<Footer />
