<script lang="ts">
	export let title: string;
	export let img: { src: string; alt?: string; width?: number; height?: number };
</script>

<div class="flex items-stretch justify-start gap-2 border border-gray-300 p-4">
	<div>
		<img src={img.src} alt={img.alt ? img.alt : title} width={img.width} height={img.height} />
	</div>
	<div class="flex flex-1 flex-col gap-2">
		<h3 class="text-lg font-bold">{title}</h3>
		<div class="flex-1">
			<slot />
		</div>
	</div>
</div>
