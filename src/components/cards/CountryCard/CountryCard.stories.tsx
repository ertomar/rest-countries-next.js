import type { Meta, StoryObj } from '@storybook/react';

import CountryCard from './CountryCard';

const meta: Meta<typeof CountryCard> = {
  title: 'Example/CountryCard',
  component: CountryCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CountryCard>;

export const Basic: Story = {
  args: {
    capital: 'Capital',
    flag: 'https://picsum.photos/200/300',
    name: 'Country Name',
    population: 1000000,
    title: 'Country Card',
  },
};
