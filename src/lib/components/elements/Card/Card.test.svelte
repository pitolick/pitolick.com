<script lang="ts">
	import Card from './Card.svelte';
</script>

<Card
	img={{
		src: 'https://via.placeholder.com/150',
		alt: 'Placeholder Image',
		width: 150,
		height: 150
	}}
	title="Card Title"><h1>slot<span data-testid="child" /></h1></Card
>
