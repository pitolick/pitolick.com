<script context="module" lang="ts">
	import MainVisual from './MainVisual.svelte';

	export const meta = {
		title: 'Pages/Home/MainVisual',
		component: MainVisual,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<MainVisual {...args} />
</Template>

<Story name="Default">
	<MainVisual />
</Story>
