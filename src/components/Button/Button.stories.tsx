import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Hello World',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Hello World',
    variant: 'secondary',
  },
};

export const White: Story = {
  args: {
    children: 'Hello World',
    variant: 'white',
  },
};
