<script context="module" lang="ts">
	import Footer from './Footer.svelte';

	export const meta = {
		title: 'Parts/Footer',
		component: Footer,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Footer {...args} />
</Template>

<Story name="Default"><Footer /></Story>
