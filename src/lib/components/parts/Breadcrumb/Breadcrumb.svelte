<script lang="ts">
	import BreadcrumbItem from './components/BreadcrumbItem.svelte';
	import BreadcrumbParent from './components/BreadcrumbParent.svelte';
	import { createBreadcrumb } from './createBreadcrumb';
	import { page } from '$app/stores';

	$: paths = createBreadcrumb($page.url.pathname);
</script>

<BreadcrumbParent>
	{#each paths as { path, name }, index}
		{#if paths.length == 1}
			<BreadcrumbItem home {index}>{name}</BreadcrumbItem>
		{:else if index == 0}
			<BreadcrumbItem href={path} home {index}>{name}</BreadcrumbItem>
		{:else if index == paths.length - 1}
			<BreadcrumbItem {index}>{name}</BreadcrumbItem>
		{:else}
			<BreadcrumbItem href={path} {index}>{name}</BreadcrumbItem>
		{/if}
	{/each}
</BreadcrumbParent>
