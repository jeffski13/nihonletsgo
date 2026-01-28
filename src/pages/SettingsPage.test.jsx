import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SettingsPage from './SettingsPage';

// Mock useLocalStorage
vi.mock('../hooks/useLocalStorage', () => ({
  default: vi.fn()
}));

import useLocalStorage from '../hooks/useLocalStorage';

describe('SettingsPage', () => {
  const mockSetLearnedKanji = vi.fn();
  const mockSetCustomKanjiList = vi.fn();

  beforeEach(() => {
    mockSetLearnedKanji.mockClear();
    mockSetCustomKanjiList.mockClear();

    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [['日', '月'], mockSetLearnedKanji];
      }
      if (key === 'customKanjiList') {
        return [[], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });
  });

  it('renders the page title', () => {
    render(<SettingsPage />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('renders custom kanji list input', () => {
    render(<SettingsPage />);
    expect(screen.getByTestId('custom-kanji-input')).toBeInTheDocument();
  });

  it('renders save custom list button', () => {
    render(<SettingsPage />);
    expect(screen.getByTestId('save-custom-button')).toBeInTheDocument();
  });

  it('renders clear progress button', () => {
    render(<SettingsPage />);
    expect(screen.getByTestId('clear-progress-button')).toBeInTheDocument();
  });

  it('displays current learned kanji count', () => {
    render(<SettingsPage />);
    expect(screen.getByText(/2 kanji learned/i)).toBeInTheDocument();
  });

  it('saves custom kanji list when save button is clicked', () => {
    render(<SettingsPage />);

    const input = screen.getByTestId('custom-kanji-input');
    fireEvent.change(input, { target: { value: '食 水 火' } });
    fireEvent.click(screen.getByTestId('save-custom-button'));

    expect(mockSetCustomKanjiList).toHaveBeenCalledWith(['食', '水', '火']);
  });

  it('shows success message after saving', async () => {
    render(<SettingsPage />);

    const input = screen.getByTestId('custom-kanji-input');
    fireEvent.change(input, { target: { value: '食 水' } });
    fireEvent.click(screen.getByTestId('save-custom-button'));

    expect(screen.getByTestId('save-message')).toBeInTheDocument();
    expect(screen.getByText(/saved 2 kanji/i)).toBeInTheDocument();
  });

  it('shows warning for invalid kanji', () => {
    render(<SettingsPage />);

    const input = screen.getByTestId('custom-kanji-input');
    fireEvent.change(input, { target: { value: '食 龍' } }); // 龍 is not in our data
    fireEvent.click(screen.getByTestId('save-custom-button'));

    expect(screen.getByTestId('save-message')).toBeInTheDocument();
    expect(screen.getByText(/not in database/i)).toBeInTheDocument();
  });

  it('shows confirmation modal when clear progress is clicked', () => {
    render(<SettingsPage />);

    fireEvent.click(screen.getByTestId('clear-progress-button'));

    expect(screen.getByText('Confirm Clear Progress')).toBeInTheDocument();
  });

  it('closes modal when cancel is clicked', async () => {
    render(<SettingsPage />);

    fireEvent.click(screen.getByTestId('clear-progress-button'));
    fireEvent.click(screen.getByTestId('cancel-clear-button'));

    // Modal closes asynchronously, wait for it
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('clears progress when confirmed', () => {
    render(<SettingsPage />);

    fireEvent.click(screen.getByTestId('clear-progress-button'));
    fireEvent.click(screen.getByTestId('confirm-clear-button'));

    expect(mockSetLearnedKanji).toHaveBeenCalledWith([]);
  });

  it('disables clear button when no progress to clear', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [[], mockSetLearnedKanji];
      }
      if (key === 'customKanjiList') {
        return [[], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<SettingsPage />);

    expect(screen.getByTestId('clear-progress-button')).toBeDisabled();
  });

  it('displays current custom list when set', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [[], mockSetLearnedKanji];
      }
      if (key === 'customKanjiList') {
        return [['食', '水', '火'], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<SettingsPage />);

    expect(screen.getByTestId('current-custom-list')).toBeInTheDocument();
    expect(screen.getByText(/3 kanji/i)).toBeInTheDocument();
  });

  it('clears custom list when clear custom button is clicked', () => {
    useLocalStorage.mockImplementation((key) => {
      if (key === 'learnedKanji') {
        return [[], mockSetLearnedKanji];
      }
      if (key === 'customKanjiList') {
        return [['食', '水'], mockSetCustomKanjiList];
      }
      return [null, vi.fn()];
    });

    render(<SettingsPage />);

    fireEvent.click(screen.getByTestId('clear-custom-button'));

    expect(mockSetCustomKanjiList).toHaveBeenCalledWith([]);
  });
});
