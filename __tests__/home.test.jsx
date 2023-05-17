import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      fallback: false,
    };
  },
}));

describe('Home', () => {
  it('renders Home unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Countries App/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
