import type { Meta, StoryObj } from '@storybook/svelte';
import LinkButton from './LinkButton.svelte';

const meta = {
	title: 'Components/LinkButton',
	component: LinkButton,
	tags: ['autodocs'],
	argTypes: {
		targetLink: {
			control: { type: 'select' },
			options: ['', '_self', '_blank', '_parent', '_top']
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
