<script lang="ts">
	import { Heading } from '$lib/components/elements';
	import MyPicture from '$lib/assets/images/pages/home/my-picture.png';
	import * as Icons from '$lib/assets/images/icon';

	const skills = [
		{ src: Icons.Nextjs, alt: 'Next.js' },
		{ src: Icons.Nuxtjs, alt: 'Nuxt.js' },
		{ src: Icons.Typescript, alt: 'TypeScript' },
		{ src: Icons.Wordpress, alt: 'WordPress' },
		{ src: Icons.Docker, alt: 'Docker' },
		{ src: Icons.Stripe, alt: 'Stripe' },
		{ src: Icons.Figma, alt: 'Figma' }
	];
</script>

<div class="py-10">
	<div class="container flex flex-col items-center justify-center gap-6">
		<div>
			<Heading>ぴいてっくはこんな人</Heading>
		</div>

		<div class="animate-fade-up flex flex-col items-center justify-center gap-6 md:flex-row">
			<div class="flex flex-col items-center justify-center gap-4">
				<div class="flex items-center justify-center">
					<img src={MyPicture} alt="ぴいてっく" class="h-auto w-44 rounded-full" />
				</div>
				<ul class="flex items-center justify-center gap-2">
					<li>
						<a href="https://twitter.com/pitolick_tech" target="_blank" rel="noopener noreferrer"
							><img src={Icons.X} alt="@pitolick_tech" /></a
						>
					</li>
					<li>
						<a
							href="https://www.facebook.com/kurihara.makoto.7/"
							target="_blank"
							rel="noopener noreferrer"><img src={Icons.Facebook} alt="@kurihara.makoto.7" /></a
						>
					</li>
					<li>
						<a href="https://github.com/pitolick" target="_blank" rel="noopener noreferrer"
							><img src={Icons.Github} alt="@pitolick" /></a
						>
					</li>
				</ul>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="text-lg font-bold">栗原 誠（通称：くりりん）</h3>
				<p>
					福井県在住のWebエンジニアです。<br />
					得意領域はフロントエンドですが、フルスタックに割となんでもやります。
				</p>
				<h4 class="text-lg font-bold">代表的スキルセット</h4>
				<ul class="flex flex-wrap gap-2">
					{#each skills as { src, alt }}
						<li>
							<img {src} {alt} class="h-auto w-10" />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
