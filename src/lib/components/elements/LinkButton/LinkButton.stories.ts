import type { Meta, StoryObj } from '@storybook/svelte';
import LinkButton from './LinkButton.svelte';
import { text } from '@sveltejs/kit';

const meta = {
	title: 'Components/LinkButton',
	component: LinkButton,
	tags: ['autodocs'],
	argTypes: {
		tag: {
			control: { type: 'select' },
			options: ['h2', 'h3', 'h4', 'h5', 'h6']
		}
	}
} satisfies Meta<LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: 'LinkButton',
		href: '#'
	}
};

export const TargetBlank: Story = {
	args: {
		text: 'LinkButton',
		href: 'https://google.com',
		targetLink: '_blank'
	}
};

export const TargetSelf: Story = {
	args: {
		text: 'LinkButton',
		href: 'https://google.com',
		targetLink: '_self'
	}
};

export const TargetParent: Story = {
	args: {
		text: 'LinkButton',
		href: '#',
		targetLink: '_parent'
	}
};

export const TargetTop: Story = {
	args: {
		text: 'LinkButton',
		href: '#',
		targetLink: '_top'
	}
};

export const RelNoopener: Story = {
	args: {
		text: 'LinkButton',
		href: '#',
		rel: 'noopener'
	}
};
