<script lang="ts">
	export let title: string;
	export let img: { src: string; alt?: string; width?: number; height?: number };
</script>

<div
	class="grid grid-cols-1 items-stretch justify-start gap-2 border border-gray-300 bg-white p-4 sm:grid-cols-3 md:flex-row"
>
	<div class="flex items-center justify-center">
		<img src={img.src} alt={img.alt ? img.alt : title} width={img.width} height={img.height} />
	</div>
	<div class="col-span-2 flex flex-col gap-2">
		<h3 class="text-lg font-bold">{title}</h3>
		<div class="flex-1">
			<slot />
		</div>
	</div>
</div>
