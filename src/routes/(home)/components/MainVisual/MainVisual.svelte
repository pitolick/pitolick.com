<script lang="ts">
	import MainVisual from '$lib/components/parts/MainVisual/MainVisual.svelte';
	import src from '$lib/assets/images/pages/index/mainv-bg.jpg';
	import mainImage from '$lib/assets/images/pages/index/mainv.png';
</script>

<MainVisual {src}>
	<div class="flex items-center justify-center">
		<div class="inline-flex flex-col-reverse items-center justify-center gap-8 md:flex-row">
			<h2 class="text-center font-bold text-white md:text-left">
				<span
					class="animate-fade-right animate-once animate-ease-in-out text-xl md:text-3xl lg:text-4xl"
					>あなたが今一番必要としている</span
				><br />
				<span
					class="animate-fade-right animate-once animate-delay-200 animate-ease-in-out text-2xl md:text-4xl lg:text-5xl"
					>Webサイトをお届けします</span
				>
			</h2>
			<div class="animate-float flex-1">
				<img
					src={mainImage}
					alt="Webサイト制作のイメージ画像"
					class=" h-60 w-auto max-w-full md:h-auto md:w-80"
					width="420"
					height="502"
				/>
			</div>
		</div>
	</div>
</MainVisual>
