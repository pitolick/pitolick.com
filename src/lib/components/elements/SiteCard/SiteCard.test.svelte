<script lang="ts">
	import SiteCard from './SiteCard.svelte';
</script>

<SiteCard title="Site Card Title" url="https://google.com" width={320}
	><h1>slot<span data-testid="child" /></h1></SiteCard
>
