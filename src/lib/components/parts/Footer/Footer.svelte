<script lang="ts">
	export let navList: {
		name: string;
		href: string;
	}[] = [
		{ name: 'ホーム', href: '/' },
		{ name: 'お問い合わせ', href: '/contact' },
		{ name: 'プライバシーポリシー', href: '/privacy-policy' }
	];
</script>

<footer id="footer" class="mt-auto bg-primary py-3">
	<div class="container flex flex-col items-center gap-1 text-white">
		<nav>
			<ul class="flex flex-wrap justify-center gap-2 text-white md:flex-row">
				{#each navList as { name, href }}
					<li>
						<a {href}>{name}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<div>
			<p class="text-sm">©︎ 2024 pitolick.com</p>
		</div>
	</div>
</footer>
