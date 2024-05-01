<script lang="ts">
	import { Heading } from '$lib/components/elements';
	import { MainVisual } from '$lib/components/parts';
	import src from '$lib/assets/images/pages/error/mainv-bg.jpg';
	import { page } from '$app/stores';
</script>

<MainVisual {src}
	><h1 class="text-center text-2xl font-bold text-white md:text-4xl">
		{$page.status}
		{$page?.error?.message}
	</h1></MainVisual
>

<div class="py-10">
	<div class="container flex flex-col items-center justify-center gap-6">
		<div>
			<Heading>ページが見つかりませんでした。</Heading>
		</div>
		<div class="flex flex-col gap-4">
			<Heading tag="h3">お探しのページはいずれかの理由により見つかりませんでした。</Heading>
			<ol class="list-inside list-decimal">
				<li>URLが間違っているか、ページが移動または削除された可能性があります。</li>
				<li>ページが一時的に利用できない状態にある可能性があります。</li>
				<li>お探しのページが存在しない可能性があります。</li>
			</ol>
			<p>
				お急ぎの場合は<a href="/contact" class="underline">お問い合わせページ</a
				>からお問い合わせください。
			</p>
		</div>
	</div>
</div>
