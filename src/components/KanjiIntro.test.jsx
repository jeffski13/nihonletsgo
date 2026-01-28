import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import KanjiIntro from './KanjiIntro';

const mockKanji = {
  character: '食',
  meaning: 'eat',
  vocabularyWord: {
    word: '食べる',
    reading: 'たべる',
    meaning: 'to eat',
    distractors: ['to drink', 'to sleep', 'to walk']
  },
  example: {
    sentence: 'ごはんを食べる',
    words: []
  }
};

describe('KanjiIntro', () => {
  it('renders nothing when kanji is null', () => {
    const { container } = render(<KanjiIntro kanji={null} onReady={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders the kanji character', () => {
    render(<KanjiIntro kanji={mockKanji} onReady={() => {}} />);
    expect(screen.getByTestId('kanji-character')).toHaveTextContent('食');
  });

  it('renders the kanji meaning', () => {
    render(<KanjiIntro kanji={mockKanji} onReady={() => {}} />);
    expect(screen.getByTestId('kanji-meaning')).toHaveTextContent('eat');
  });

  it('renders the vocabulary word', () => {
    render(<KanjiIntro kanji={mockKanji} onReady={() => {}} />);
    expect(screen.getByTestId('vocabulary-word')).toHaveTextContent('食べる');
  });

  it('renders the vocabulary reading in hiragana', () => {
    render(<KanjiIntro kanji={mockKanji} onReady={() => {}} />);
    expect(screen.getByTestId('vocabulary-reading')).toHaveTextContent('たべる');
  });

  it('renders the vocabulary meaning', () => {
    render(<KanjiIntro kanji={mockKanji} onReady={() => {}} />);
    expect(screen.getByTestId('vocabulary-meaning')).toHaveTextContent('to eat');
  });

  it('renders the Ready to Test button', () => {
    render(<KanjiIntro kanji={mockKanji} onReady={() => {}} />);
    expect(screen.getByTestId('ready-button')).toHaveTextContent('Ready to Test');
  });

  it('calls onReady when button is clicked', () => {
    const mockOnReady = vi.fn();
    render(<KanjiIntro kanji={mockKanji} onReady={mockOnReady} />);

    fireEvent.click(screen.getByTestId('ready-button'));

    expect(mockOnReady).toHaveBeenCalledTimes(1);
  });

  it('displays the kanji character in large font', () => {
    render(<KanjiIntro kanji={mockKanji} onReady={() => {}} />);
    const character = screen.getByTestId('kanji-character');
    expect(character).toHaveStyle({ fontSize: '8rem' });
  });
});
