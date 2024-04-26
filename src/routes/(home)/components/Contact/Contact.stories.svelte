<script context="module" lang="ts">
	import Contact from './Contact.svelte';

	export const meta = {
		title: 'Pages/Home/Contact',
		component: Contact,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Contact {...args} />
</Template>

<Story name="Default">
	<Contact />
</Story>
