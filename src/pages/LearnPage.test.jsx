import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import LearnPage from './LearnPage';

// Mock useLocalStorage
vi.mock('../hooks/useLocalStorage', () => ({
  default: vi.fn()
}));

import useLocalStorage from '../hooks/useLocalStorage';

describe('LearnPage', () => {
  const mockSetLearnedKanji = vi.fn();
  const mockSetCustomKanjiList = vi.fn();

  beforeEach(() => {
    mockSetLearnedKanji.mockClear();
    mockSetCustomKanjiList.mockClear();

    // Default mock implementation
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [[], mockSetLearnedKanji];
      }
      if (key === 'customKanjiList') {
        return [[], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });
  });

  it('renders the introduction step initially', () => {
    render(<LearnPage />);

    expect(screen.getByTestId('step-indicator')).toHaveTextContent('Step 1 of 3');
    expect(screen.getByTestId('ready-button')).toBeInTheDocument();
  });

  it('shows progress bar', () => {
    render(<LearnPage />);

    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
  });

  it('displays the KanjiIntro component with Ready button', () => {
    render(<LearnPage />);

    expect(screen.getByText('Ready to Test')).toBeInTheDocument();
    expect(screen.getByTestId('kanji-character')).toBeInTheDocument();
  });

  it('shows completion message when all kanji are learned', () => {
    // Mock all kanji as learned
    const allKanji = ['日', '一', '人', '大', '年', '中', '出', '上', '下', '小',
      '本', '月', '水', '火', '木', '金', '土', '行', '来', '見',
      '食', '飲', '聞', '読', '書', '話', '買', '入', '分', '時',
      '間', '今', '何', '気', '好', '新', '古', '長', '高', '安',
      '白', '黒', '赤', '青', '電', '車', '駅', '道', '店'];

    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [allKanji, mockSetLearnedKanji];
      }
      if (key === 'customKanjiList') {
        return [[], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<LearnPage />);

    expect(screen.getByTestId('all-learned-alert')).toBeInTheDocument();
    expect(screen.getByText(/congratulations/i)).toBeInTheDocument();
  });

  it('displays the first kanji when starting fresh', () => {
    render(<LearnPage />);

    expect(screen.getByTestId('kanji-character')).toHaveTextContent('日');
  });

  it('displays the next unlearned kanji', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [['日'], mockSetLearnedKanji];
      }
      if (key === 'customKanjiList') {
        return [[], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<LearnPage />);

    expect(screen.getByTestId('kanji-character')).toHaveTextContent('一');
  });

  it('prioritizes custom kanji list', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [[], mockSetLearnedKanji];
      }
      if (key === 'customKanjiList') {
        return [['食', '水'], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<LearnPage />);

    expect(screen.getByTestId('kanji-character')).toHaveTextContent('食');
  });

  it('displays vocabulary word and meaning on intro screen', () => {
    render(<LearnPage />);

    expect(screen.getByTestId('vocabulary-word')).toHaveTextContent('日曜日');
    expect(screen.getByTestId('vocabulary-meaning')).toHaveTextContent('Sunday');
  });

  it('displays progress statistics', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [['日', '月', '火'], mockSetLearnedKanji];
      }
      if (key === 'customKanjiList') {
        return [[], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<LearnPage />);

    expect(screen.getByText(/3 \/ 49 kanji learned/)).toBeInTheDocument();
  });
});
