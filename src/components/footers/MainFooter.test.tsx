import {screen, render} from '@testing-library/react'
import Footer from './MainFooter';

test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Document Navigation/i);
  expect(linkElement).toBeInTheDocument();
});
