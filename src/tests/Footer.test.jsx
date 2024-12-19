import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'; 

describe('Footer Component', () => {
  test('renders the footer with correct content', () => {
    render(<Footer />);

  
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();

  
    expect(footerElement).toHaveTextContent('AnimeTrail © 2024');
  });

  test('has the correct class name for styling', () => {
    render(<Footer />);
    
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('footer');
  });
});