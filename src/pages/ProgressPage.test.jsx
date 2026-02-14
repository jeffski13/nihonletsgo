import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProgressPage from './ProgressPage';

// Mock useLocalStorage
vi.mock('../hooks/useLocalStorage', () => ({
  default: vi.fn()
}));

import useLocalStorage from '../hooks/useLocalStorage';
import kanjiData from '../data/kanjiData';

describe('ProgressPage', () => {
  beforeEach(() => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [[], vi.fn()];
      }
      return [null, vi.fn()];
    });
  });

  it('renders the page title', () => {
    render(<ProgressPage />);

    expect(screen.getByText('Your Progress')).toBeInTheDocument();
  });

  it('displays learned count as 0 when nothing completed', () => {
    render(<ProgressPage />);

    expect(screen.getByTestId('learned-count')).toHaveTextContent('0');
  });

  it('displays total count', () => {
    render(<ProgressPage />);

    expect(screen.getByTestId('total-count')).toBeInTheDocument();
    const total = parseInt(screen.getByTestId('total-count').textContent);
    expect(total).toBe(kanjiData.length);
  });

  it('displays percentage as 0 when nothing completed', () => {
    render(<ProgressPage />);

    expect(screen.getByTestId('percentage')).toHaveTextContent('0%');
  });

  it('shows message when no kanji learned', () => {
    render(<ProgressPage />);

    expect(screen.getByTestId('no-kanji-message')).toBeInTheDocument();
    expect(screen.getByText(/haven't learned any kanji/i)).toBeInTheDocument();
  });

  it('displays learned kanji in grid', () => {
    // Complete first 3 entries (indices 0, 1, 2)
    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [[0, 1, 2], vi.fn()];
      }
      return [null, vi.fn()];
    });

    render(<ProgressPage />);

    expect(screen.getByTestId('kanji-grid')).toBeInTheDocument();
    expect(screen.getByTestId(`kanji-badge-${kanjiData[0].character}`)).toBeInTheDocument();
    expect(screen.getByTestId(`kanji-badge-${kanjiData[1].character}`)).toBeInTheDocument();
    expect(screen.getByTestId(`kanji-badge-${kanjiData[2].character}`)).toBeInTheDocument();
  });

  it('displays correct learned count', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [[0, 1, 2], vi.fn()];
      }
      return [null, vi.fn()];
    });

    render(<ProgressPage />);

    expect(screen.getByTestId('learned-count')).toHaveTextContent('3');
  });

  it('calculates percentage correctly', () => {
    const halfIndices = kanjiData.slice(0, Math.floor(kanjiData.length / 2)).map((_, i) => i);

    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [halfIndices, vi.fn()];
      }
      return [null, vi.fn()];
    });

    render(<ProgressPage />);

    const percentage = parseInt(screen.getByTestId('percentage').textContent);
    expect(percentage).toBeGreaterThan(40);
    expect(percentage).toBeLessThan(60);
  });

  it('does not show no-kanji message when entries are completed', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [[0], vi.fn()];
      }
      return [null, vi.fn()];
    });

    render(<ProgressPage />);

    expect(screen.queryByTestId('no-kanji-message')).not.toBeInTheDocument();
  });
});
