<script context="module" lang="ts">
	import MainVisual from './MainVisual.svelte';
	import src from '$lib/assets/images/pages/index/mainv-bg.jpg';

	export const meta = {
		title: 'Parts/MainVisual',
		component: MainVisual,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	let slot: string = 'This is a card component';
</script>

<Template let:args>
	<MainVisual {...args}>
		{slot}
	</MainVisual>
</Template>

<Story name="Default">
	<MainVisual {src}>Slot Text</MainVisual>
</Story>

<Story name="No Image">
	<MainVisual>No Image</MainVisual>
</Story>
