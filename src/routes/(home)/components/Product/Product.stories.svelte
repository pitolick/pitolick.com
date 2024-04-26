<script context="module" lang="ts">
	import Product from './Product.svelte';

	export const meta = {
		title: 'Pages/Home/Product',
		component: Product,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Product {...args} />
</Template>

<Story name="Default">
	<Product />
</Story>
