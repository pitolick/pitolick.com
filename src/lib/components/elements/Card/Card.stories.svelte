<script context="module" lang="ts">
	import Card from './Card.svelte';

	export const meta = {
		title: 'Components/Card',
		component: Card,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	let slot: string = 'This is a card component';
</script>

<Template let:args>
	<Card {...args}>
		{slot}
	</Card>
</Template>

<Story name="Default"
	><Card
		img={{
			src: 'https://via.placeholder.com/150',
			alt: 'Placeholder Image',
			width: 150,
			height: 150
		}}
		title="Card Title">slot text</Card
	></Story
>

<Story name="Image Small"
	><Card
		img={{
			src: 'https://via.placeholder.com/100',
			alt: 'Placeholder Image',
			width: 100,
			height: 100
		}}
		title="Card Title">slot text</Card
	></Story
>
