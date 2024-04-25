<script lang="ts">
	export let navList: {
		name: string;
		href: string;
	}[] = [
		{ name: 'Home', href: '/' },
		{ name: 'Home', href: '/' }
	];
</script>

<footer id="footer" class="mt-auto bg-primary py-3">
	<div class="container flex flex-col items-center gap-1 text-white">
		<nav>
			<ul class="flex flex-col gap-2 divide-y text-white md:flex-row md:divide-none">
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
