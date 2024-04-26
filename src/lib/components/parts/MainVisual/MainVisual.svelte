<script lang="ts">
	import { tdk } from '$lib/config';
	import { page } from '$app/stores';
	export let src: string | undefined = undefined;

	let pageTitle: string | undefined;
	if ($page?.url.pathname) {
		pageTitle = tdk[$page.url.pathname]?.title;
	}
</script>

<div
	id="mainv"
	class="bg-gradient-primary relative flex items-stretch justify-stretch pb-10 pt-16 md:pb-20 md:pt-32"
>
	<div class="container relative z-10">
		<slot><h1 class="text-center text-4xl font-bold text-white">{pageTitle}</h1></slot>
	</div>
	<div class="absolute bottom-0 left-0 right-0 top-0 z-0 m-auto flex-1 bg-cover opacity-20">
		<img {src} alt="メインビジュアル" class="h-full w-full object-cover" />
	</div>
</div>
