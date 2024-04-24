<script context="module" lang="ts">
	import Header from './Header.svelte';

	export const meta = {
		title: 'Parts/Header',
		component: Header,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Header {...args} />
</Template>

<Story name="Default"><div class="relative h-80 bg-gray-700 md:h-20"><Header /></div></Story>
