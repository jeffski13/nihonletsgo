import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProgressPage from './ProgressPage';

// Mock useLocalStorage
vi.mock('../hooks/useLocalStorage', () => ({
  default: vi.fn()
}));

import useLocalStorage from '../hooks/useLocalStorage';

describe('ProgressPage', () => {
  beforeEach(() => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [[], vi.fn()];
      }
      return [null, vi.fn()];
    });
  });

  it('renders the page title', () => {
    render(<ProgressPage />);

    expect(screen.getByText('Your Progress')).toBeInTheDocument();
  });

  it('displays learned count as 0 when nothing learned', () => {
    render(<ProgressPage />);

    expect(screen.getByTestId('learned-count')).toHaveTextContent('0');
  });

  it('displays total count', () => {
    render(<ProgressPage />);

    expect(screen.getByTestId('total-count')).toBeInTheDocument();
    // Should be greater than 0
    const total = parseInt(screen.getByTestId('total-count').textContent);
    expect(total).toBeGreaterThan(0);
  });

  it('displays percentage as 0 when nothing learned', () => {
    render(<ProgressPage />);

    expect(screen.getByTestId('percentage')).toHaveTextContent('0%');
  });

  it('shows message when no kanji learned', () => {
    render(<ProgressPage />);

    expect(screen.getByTestId('no-kanji-message')).toBeInTheDocument();
    expect(screen.getByText(/haven't learned any kanji/i)).toBeInTheDocument();
  });

  it('displays learned kanji in grid', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [['日', '月', '火'], vi.fn()];
      }
      return [null, vi.fn()];
    });

    render(<ProgressPage />);

    expect(screen.getByTestId('kanji-grid')).toBeInTheDocument();
    expect(screen.getByTestId('kanji-badge-日')).toBeInTheDocument();
    expect(screen.getByTestId('kanji-badge-月')).toBeInTheDocument();
    expect(screen.getByTestId('kanji-badge-火')).toBeInTheDocument();
  });

  it('displays correct learned count', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [['日', '月', '火'], vi.fn()];
      }
      return [null, vi.fn()];
    });

    render(<ProgressPage />);

    expect(screen.getByTestId('learned-count')).toHaveTextContent('3');
  });

  it('calculates percentage correctly', () => {
    // Mock with about half the kanji learned
    const halfKanji = ['日', '一', '人', '大', '年', '中', '出', '上', '下', '小',
      '本', '月', '水', '火', '木', '金', '土', '行', '来', '見',
      '食', '飲', '聞', '読', '書'];

    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [halfKanji, vi.fn()];
      }
      return [null, vi.fn()];
    });

    render(<ProgressPage />);

    const percentage = parseInt(screen.getByTestId('percentage').textContent);
    expect(percentage).toBeGreaterThan(40);
    expect(percentage).toBeLessThan(60);
  });

  it('does not show no-kanji message when kanji are learned', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [['日'], vi.fn()];
      }
      return [null, vi.fn()];
    });

    render(<ProgressPage />);

    expect(screen.queryByTestId('no-kanji-message')).not.toBeInTheDocument();
  });
});
