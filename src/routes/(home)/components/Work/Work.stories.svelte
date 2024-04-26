<script context="module" lang="ts">
	import Work from './Work.svelte';

	export const meta = {
		title: 'Pages/Home/Work',
		component: Work,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Work {...args} />
</Template>

<Story name="Default">
	<Work />
</Story>
