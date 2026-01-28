import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navigation', () => {
  it('renders the brand name', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText('Nihon Let\'s Go')).toBeInTheDocument();
  });

  it('renders Learn link', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByRole('link', { name: /learn/i })).toBeInTheDocument();
  });

  it('renders Progress link', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByRole('link', { name: /progress/i })).toBeInTheDocument();
  });

  it('renders Settings link', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument();
  });

  it('Learn link points to root', () => {
    renderWithRouter(<Navigation />);
    const learnLink = screen.getByRole('link', { name: /learn/i });
    expect(learnLink).toHaveAttribute('href', '/');
  });

  it('Progress link points to /progress', () => {
    renderWithRouter(<Navigation />);
    const progressLink = screen.getByRole('link', { name: /progress/i });
    expect(progressLink).toHaveAttribute('href', '/progress');
  });

  it('Settings link points to /settings', () => {
    renderWithRouter(<Navigation />);
    const settingsLink = screen.getByRole('link', { name: /settings/i });
    expect(settingsLink).toHaveAttribute('href', '/settings');
  });
});
