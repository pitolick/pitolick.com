<script context="module" lang="ts">
	import LinkButton from './LinkButton.svelte';

	export const meta = {
		title: 'Components/LinkButton',
		component: LinkButton,
		tags: ['autodocs'],
		argTypes: {
			targetLink: {
				control: { type: 'select' },
				options: ['', '_self', '_blank', '_parent', '_top']
			}
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<LinkButton {...args} />
</Template>

<Story
	name="Default"
	args={{
		text: 'LinkButton',
		href: '#'
	}}
/>

<Story
	name="TargetBlank"
	args={{
		text: 'LinkButton',
		href: 'https://google.com',
		targetLink: '_blank'
	}}
/>

<Story
	name="TargetSelf"
	args={{
		text: 'LinkButton',
		href: 'https://google.com',
		targetLink: '_self'
	}}
/>

<Story
	name="TargetParent"
	args={{
		text: 'LinkButton',
		href: 'https://google.com',
		targetLink: '_parent'
	}}
/>

<Story
	name="TargetTop"
	args={{
		text: 'LinkButton',
		href: 'https://google.com',
		targetLink: '_top'
	}}
/>

<Story
	name="RelNoopener"
	args={{
		text: 'LinkButton',
		href: '#',
		rel: 'noopener'
	}}
/>
