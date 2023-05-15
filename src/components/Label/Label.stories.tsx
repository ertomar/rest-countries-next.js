import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Example/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

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
    styles: {
      backgroundColor: 'black',
    },
  },
};
