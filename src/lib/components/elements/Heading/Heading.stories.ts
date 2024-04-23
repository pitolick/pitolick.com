import type { Meta, StoryObj } from '@storybook/svelte';
import Heading from './Heading.svelte';

const meta = {
	title: 'Components/Heading',
	component: Heading,
	tags: ['autodocs'],
	argTypes: {
		tag: {
			control: { type: 'select' },
			options: ['h2', 'h3', 'h4', 'h5', 'h6']
		}
	}
} satisfies Meta<Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const H2: Story = {
	args: {
		tag: 'h2'
	}
};

export const H3: Story = {
	args: {
		tag: 'h3'
	}
};

export const H4: Story = {
	args: {
		tag: 'h4'
	}
};

export const H5: Story = {
	args: {
		tag: 'h5'
	}
};

export const H6: Story = {
	args: {
		tag: 'h6'
	}
};
