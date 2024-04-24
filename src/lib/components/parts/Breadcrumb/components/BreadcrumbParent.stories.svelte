<script context="module" lang="ts">
	import BreadcrumbItem from './BreadcrumbItem.svelte';
	import BreadcrumbParent from './BreadcrumbParent.svelte';

	export const meta = {
		title: 'Parts/BreadcrumbItem',
		component: BreadcrumbItem,
		tags: ['autodocs'],
		parameters: {
			backgrounds: {
				default: 'gray',
				values: [
					{ name: 'white', value: '#ffffff' },
					{ name: 'gray', value: '#888' },
					{ name: 'black', value: '#000000' }
				]
			}
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	let slot: string = 'page name';
</script>

<Template let:args>
	<BreadcrumbParent>
		<BreadcrumbItem {...args}>
			{slot}
		</BreadcrumbItem>
	</BreadcrumbParent>
</Template>

<Story name="Default">
	<BreadcrumbParent>
		<BreadcrumbItem index={1} home href="/">home text</BreadcrumbItem>
		<BreadcrumbItem index={2} href="/link">link text</BreadcrumbItem>
		<BreadcrumbItem index={3}>page text</BreadcrumbItem>
	</BreadcrumbParent>
</Story>

<Story name="Home">
	<BreadcrumbParent>
		<BreadcrumbItem home index={1}>home text</BreadcrumbItem>
	</BreadcrumbParent>
</Story>

<Story name="Link">
	<BreadcrumbParent>
		<BreadcrumbItem href="/link" index={1}>link text</BreadcrumbItem>
	</BreadcrumbParent>
</Story>
