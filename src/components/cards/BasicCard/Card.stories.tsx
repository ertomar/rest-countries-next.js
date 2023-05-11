import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: 'Hello World',
  },
};
