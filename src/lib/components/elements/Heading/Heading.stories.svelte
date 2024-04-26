<script context="module" lang="ts">
	import Heading from './Heading.svelte';

	export const meta = {
		title: 'Components/Heading',
		component: Heading,
		tags: ['autodocs'],
		argTypes: {
			tag: {
				control: { type: 'select' },
				options: ['h2', 'h3', 'h4', 'h5', 'h6']
			}
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	let slot: string = 'This is a Heading component';
</script>

<Template let:args>
	<Heading {...args}>
		{slot}
	</Heading>
</Template>

<Story name="Default">
	<Heading>slot text</Heading>
</Story>

<Story name="h2">
	<Heading tag="h2">h2 text</Heading>
</Story>

<Story name="h2 Wide">
	<Heading tag="h2" style="wide">h2 text</Heading>
</Story>

<Story name="h3">
	<Heading tag="h3">h3 text</Heading>
</Story>

<Story name="h4">
	<Heading tag="h4">h4 text</Heading>
</Story>

<Story name="h5">
	<Heading tag="h5">h5 text</Heading>
</Story>

<Story name="h6">
	<Heading tag="h6">h6 text</Heading>
</Story>
