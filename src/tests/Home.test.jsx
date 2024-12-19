import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Component', () => {
  it('renders the Navbar', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    // Check if Navbar component is rendered
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the Footer', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    // Check if Footer component is rendered
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('displays the anime illustration image', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const image = screen.getByAltText('anime-illustration');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('homepage.png'); // Verify the correct image source
  });

  it('renders the title and subtitle', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/Welcome to AnimeTrail!/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Discover Anime titles and receive recommendations on what to watch next in a few clicks!/i
      )
    ).toBeInTheDocument();
  });

  it('renders the signup and login buttons with correct links', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const signUpButton = screen.getByText(/Sign Up/i);
    const loginButton = screen.getByText(/Login/i);

    expect(signUpButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    expect(signUpButton.closest('a')).toHaveAttribute('href', '/signup');
    expect(loginButton.closest('a')).toHaveAttribute('href', '/login');
  });

  it('applies the correct CSS classes', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const title = screen.getByText(/Welcome to AnimeTrail!/i);
    const subtitle = screen.getByText(
      /Discover Anime titles and receive recommendations on what to watch next in a few clicks!/i
    );

    expect(title).toHaveClass('title');
    expect(subtitle).toHaveClass('subtitle');
  });
});