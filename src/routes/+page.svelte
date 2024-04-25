<script>
	import { Heading } from '$lib/components/elements';
	import MainVisual from '$lib/components/parts/MainVisual/MainVisual.svelte';
	import src from '$lib/assets/images/pages/index/mainv-bg.jpg';
</script>

<div class="bg-gray-300">
	<MainVisual {src}>{src}</MainVisual> <br />
	<br />
	<br />
	<br />
	<br />

	<h1 class="after: text-5xl text-black">Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<Heading tag="h3">This is a<br /> custom element</Heading>
</div>
