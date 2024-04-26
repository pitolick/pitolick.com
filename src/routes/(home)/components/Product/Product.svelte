<script lang="ts">
	import { Heading } from '$lib/components/elements';
	import { SiteCard } from '$lib/components/elements';

	const sites = [
		{
			url: 'https://blog.pitolick.com',
			title: 'WEBLOGぴいてっく',
			description: 'ぴいてっくの技術ブログです。'
		},
		{
			url: 'https://filmlog.pitolick.com',
			title: 'フィルムログ',
			description: '映画などのレビューブログです。'
		}
	];
</script>

<div class="bg-gray-100 py-10">
	<div class="container flex flex-col items-center justify-center gap-6">
		<div>
			<Heading
				><span class="inline-block">ぴいてっくが</span><span class="inline-block"
					>運営しているサイト</span
				></Heading
			>
		</div>

		<ul class="flex w-full flex-row flex-wrap items-center justify-center gap-6">
			{#each sites as site}
				<SiteCard title={site.title} url={site.url}><p>{site.description}</p></SiteCard>
			{/each}
		</ul>
	</div>
</div>
