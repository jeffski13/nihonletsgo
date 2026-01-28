import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ExampleSentence from './ExampleSentence';

const mockKanji = {
  character: '食',
  meaning: 'eat',
  vocabularyWord: {
    word: '食べる',
    reading: 'たべる',
    meaning: 'to eat',
    incorrectAnswers: ['to drink', 'to sleep', 'to walk']
  },
  example: {
    sentence: 'ごはんを食べる',
    words: [
      { text: 'ごはん', reading: 'gohan', meaning: 'rice/meal' },
      { text: 'を', reading: 'wo', meaning: '(object marker)' },
      { text: '食べる', reading: 'taberu', meaning: 'to eat', isNewWord: true }
    ]
  }
};

describe('ExampleSentence', () => {
  it('renders nothing when kanji is null', () => {
    const { container } = render(<ExampleSentence kanji={null} onComplete={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders nothing when example is missing', () => {
    const kanjiWithoutExample = { ...mockKanji, example: null };
    const { container } = render(<ExampleSentence kanji={kanjiWithoutExample} onComplete={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders all words from the example sentence', () => {
    render(<ExampleSentence kanji={mockKanji} onComplete={() => {}} />);

    expect(screen.getByTestId('hover-word-ごはん')).toBeInTheDocument();
    expect(screen.getByTestId('hover-word-を')).toBeInTheDocument();
    expect(screen.getByTestId('hover-word-食べる')).toBeInTheDocument();
  });

  it('renders the vocabulary word for review', () => {
    render(<ExampleSentence kanji={mockKanji} onComplete={() => {}} />);

    expect(screen.getByTestId('vocab-review')).toHaveTextContent('食べる');
  });

  it('renders the Mark as Learned button', () => {
    render(<ExampleSentence kanji={mockKanji} onComplete={() => {}} />);

    expect(screen.getByTestId('complete-button')).toHaveTextContent('Mark as Learned');
  });

  it('calls onComplete when button is clicked', () => {
    const mockOnComplete = vi.fn();
    render(<ExampleSentence kanji={mockKanji} onComplete={mockOnComplete} />);

    fireEvent.click(screen.getByTestId('complete-button'));

    expect(mockOnComplete).toHaveBeenCalledTimes(1);
  });

  it('displays hover instruction text', () => {
    render(<ExampleSentence kanji={mockKanji} onComplete={() => {}} />);

    expect(screen.getByText(/hover over words/i)).toBeInTheDocument();
  });

  it('shows vocabulary reading and meaning', () => {
    render(<ExampleSentence kanji={mockKanji} onComplete={() => {}} />);

    expect(screen.getByText('たべる')).toBeInTheDocument();
    expect(screen.getByText('to eat')).toBeInTheDocument();
  });
});
