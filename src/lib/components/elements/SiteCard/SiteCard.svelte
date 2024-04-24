<script lang="ts">
	export let title: string;
	export let url: string;
	export let width: number = 320;

	// URLをエンコード
	$: encodedUrl = encodeURIComponent(url);
</script>

<div class="flex flex-col items-center justify-center gap-2 text-center">
	<div>
		<a href={url} target="_blank" rel="noopener"
			><img
				src={`https://s.wordpress.com/mshots/v1/` + encodedUrl + `?w=` + width}
				alt={title}
				{width}
			/></a
		>
	</div>
	<h3 class="text-lg font-bold">
		<a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
	</h3>
	<div><slot></slot></div>
</div>
