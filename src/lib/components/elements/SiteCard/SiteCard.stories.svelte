<script context="module" lang="ts">
	import SiteCard from './SiteCard.svelte';

	export const meta = {
		title: 'Components/SiteCard',
		component: SiteCard,
		tags: ['autodocs']
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	let slot: string = 'This is a site card component';
</script>

<Template let:args>
	<SiteCard {...args}>
		{slot}
	</SiteCard>
</Template>

<Story name="Default"
	><SiteCard title="Site Card Title" url="https://google.com"><p>slot text</p></SiteCard></Story
>

<Story name="Image Small"
	><SiteCard title="Site Card Title" url="https://google.com" width={100}><p>slot text</p></SiteCard
	></Story
>
