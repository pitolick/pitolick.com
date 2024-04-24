<script lang="ts">
	let menuOpen = false;

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	export let navList: {
		name: string;
		href: string;
	}[] = [{ name: 'Home', href: '/' }];
</script>

<nav>
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
		<button
			type="button"
			on:click={toggleMenu}
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
		>
			{#if !menuOpen}
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			{:else}
				<span class="sr-only">Close main menu</span>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1l12 12M1 13L13 1"
					/>
				</svg>
			{/if}
		</button>
		<div
			class={(menuOpen ? 'block' : 'hidden') +
				` absolute bottom-0 left-0 right-0 z-50 max-h-[80vh] w-full translate-y-full overflow-auto bg-gray-700/80 md:static md:block md:w-auto md:-translate-y-0 md:bg-inherit`}
			id="navbar-default"
		>
			<ul class="flex flex-col gap-x-2 divide-y text-white md:flex-row md:divide-none">
				{#each navList as { name, href }}
					<li>
						<a {href} class="block px-4 py-2">{name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
