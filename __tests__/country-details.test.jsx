import { render, screen } from '@testing-library/react';
import CountryDetails from '../src/pages/country/[id]/index';
import '@testing-library/jest-dom';

import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();

nextRouter.useRouter.mockImplementation(() => ({
  route: '/',
  push: jest.fn(),
}));

describe('Country Details', () => {
  it('renders CountryDetails unchanged', () => {
    const { container } = render(<CountryDetails />);
    expect(container).toMatchSnapshot();
  });

  it('renders a heading', () => {
    render(<CountryDetails />);

    const heading = screen.getByRole('heading', {
      name: /Countries App/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders a back button', () => {
    render(<CountryDetails />);

    const button = screen.getByRole('button', {
      name: /Back/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('back button redirects to home page', () => {
    render(<CountryDetails />);

    const button = screen.getByRole('button', {
      name: /back/i,
    });

    button.click();

    expect(nextRouter.useRouter).toHaveBeenCalled();
  });
});
