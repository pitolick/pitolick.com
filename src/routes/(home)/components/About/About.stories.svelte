<script context="module" lang="ts">
	import About from './About.svelte';

	export const meta = {
		title: 'Pages/Home/About',
		component: About,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<About {...args} />
</Template>

<Story name="Default">
	<About />
</Story>
