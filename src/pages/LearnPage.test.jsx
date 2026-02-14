import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import LearnPage from './LearnPage';

// Mock useLocalStorage
vi.mock('../hooks/useLocalStorage', () => ({
  default: vi.fn()
}));

import useLocalStorage from '../hooks/useLocalStorage';
import kanjiData from '../data/kanjiData';

describe('LearnPage', () => {
  const mockSetCompletedEntries = vi.fn();
  const mockSetCustomKanjiList = vi.fn();

  beforeEach(() => {
    mockSetCompletedEntries.mockClear();
    mockSetCustomKanjiList.mockClear();

    // Default mock implementation
    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [[], mockSetCompletedEntries];
      }
      if (key === 'customKanjiList') {
        return [[], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });
  });

  it('renders the introduction step initially', () => {
    render(<LearnPage />);

    expect(screen.getByTestId('step-indicator')).toHaveTextContent('Step 1 of 5');
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

  it('shows completion message when all entries are completed', () => {
    // Mock all entries as completed
    const allIndices = kanjiData.map((_, i) => i);

    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [allIndices, mockSetCompletedEntries];
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

    expect(screen.getByTestId('kanji-character')).toHaveTextContent(kanjiData[0].character);
  });

  it('displays the next uncompleted entry', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [[0], mockSetCompletedEntries];
      }
      if (key === 'customKanjiList') {
        return [[], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<LearnPage />);

    expect(screen.getByTestId('kanji-character')).toHaveTextContent(kanjiData[1].character);
  });

  it('prioritizes custom kanji list', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [[], mockSetCompletedEntries];
      }
      if (key === 'customKanjiList') {
        return [[kanjiData[5].character, kanjiData[6].character], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<LearnPage />);

    expect(screen.getByTestId('kanji-character')).toHaveTextContent(kanjiData[5].character);
  });

  it('displays vocabulary word and meaning on intro screen', () => {
    render(<LearnPage />);

    expect(screen.getByTestId('vocabulary-word')).toHaveTextContent(kanjiData[0].vocabularyWord.word);
    expect(screen.getByTestId('vocabulary-meaning')).toHaveTextContent(kanjiData[0].vocabularyWord.meaning);
  });

  it('displays progress statistics', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'completedEntries') {
        return [[0, 1, 2], mockSetCompletedEntries];
      }
      if (key === 'customKanjiList') {
        return [[], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<LearnPage />);

    expect(screen.getByText(new RegExp(`3 / ${kanjiData.length} kanji learned`))).toBeInTheDocument();
  });
});
