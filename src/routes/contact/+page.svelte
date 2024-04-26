<script lang="ts">
	import { Heading } from '$lib/components/elements';
	import { MainVisual } from '$lib/components/parts';
	import src from '$lib/assets/images/pages/contact/mainv-bg.jpg';
</script>

<MainVisual {src} />

<div class="py-10">
	<div class="container flex flex-col items-center justify-center gap-6">
		<div>
			<Heading>ぴいてっくに相談する</Heading>
		</div>
		<div>
			<iframe
				class="max-w-full"
				src="https://docs.google.com/forms/d/e/1FAIpQLSeVxf4cByP8uPDzMWBmr2KJUqhG4tIMGWbu_kB6tDbBogXqjw/viewform?embedded=true"
				width="640"
				height="1500"
				frameborder="0"
				title="ぴいてっくに相談する"
				marginheight="0"
				marginwidth="0">読み込んでいます…</iframe
			>
		</div>
	</div>
</div>
