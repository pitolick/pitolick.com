<script>
	import { Heading } from '$lib/components/elements';
	import { Breadcrumb } from '$lib/components/parts';
</script>

<h1 class="after: text-5xl text-black">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Heading tag="h3">This is a<br /> custom element</Heading>
<hr />
<div class="bg-gray-700">
	<Breadcrumb />
</div>
