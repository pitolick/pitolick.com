<script lang="ts">
	export let src: string | undefined = undefined;
</script>

<div id="mainv" class="bg-gradient-primary relative flex items-stretch justify-stretch pb-20 pt-32">
	<div class="absolute bottom-0 left-0 right-0 top-0 m-auto flex-1 bg-cover opacity-20">
		<img {src} alt="メインビジュアル" class="h-full w-full object-cover" />
	</div>
	<div class="container">
		<slot />
	</div>
</div>
