import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock useLocalStorage
vi.mock('./hooks/useLocalStorage', () => ({
  default: vi.fn()
}));

import useLocalStorage from './hooks/useLocalStorage';

const renderWithRouter = (initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>
  );
};

describe('App', () => {
  beforeEach(() => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [[], vi.fn()];
      }
      if (key === 'customKanjiList') {
        return [[], vi.fn()];
      }
      return [null, vi.fn()];
    });
  });

  it('renders navigation', () => {
    renderWithRouter();
    expect(screen.getByText('Nihon Let\'s Go')).toBeInTheDocument();
  });

  it('renders LearnPage at root path', () => {
    renderWithRouter('/');
    expect(screen.getByTestId('kanji-character')).toBeInTheDocument();
  });

  it('renders ProgressPage at /progress', () => {
    renderWithRouter('/progress');
    expect(screen.getByText('Your Progress')).toBeInTheDocument();
  });

  it('renders SettingsPage at /settings', () => {
    renderWithRouter('/settings');
    expect(screen.getByRole('heading', { name: 'Settings' })).toBeInTheDocument();
  });

  it('navigation links are present', () => {
    renderWithRouter();
    expect(screen.getByRole('link', { name: /learn/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /progress/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument();
  });
});
