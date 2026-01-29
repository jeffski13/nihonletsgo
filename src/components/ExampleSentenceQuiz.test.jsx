import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ExampleSentenceQuiz from './ExampleSentenceQuiz';

const mockKanji = {
  character: '一',
  meaning: 'one',
  vocabularyWord: {
    word: '一つ',
    reading: 'ひとつ',
    meaning: 'one (thing)',
    incorrectAnswers: ['two (things)', 'three (things)', 'many']
  },
  example: {
    sentence: 'りんごを一つください',
    sentenceMeaning: 'One apple, please.',
    incorrectSentenceMeanings: ['Two apples, please.', 'One orange, please.', "I don't want any apples."],
    words: []
  }
};

describe('ExampleSentenceQuiz', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders nothing when kanji is null', () => {
    const { container } = render(<ExampleSentenceQuiz kanji={null} onCorrect={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('displays the example sentence', () => {
    render(<ExampleSentenceQuiz kanji={mockKanji} onCorrect={() => {}} />);
    expect(screen.getByTestId('sentence-quiz-sentence')).toHaveTextContent('りんごを一つください');
  });

  it('displays 4 options', () => {
    render(<ExampleSentenceQuiz kanji={mockKanji} onCorrect={() => {}} />);
    expect(screen.getByTestId('sentence-option-0')).toBeInTheDocument();
    expect(screen.getByTestId('sentence-option-1')).toBeInTheDocument();
    expect(screen.getByTestId('sentence-option-2')).toBeInTheDocument();
    expect(screen.getByTestId('sentence-option-3')).toBeInTheDocument();
  });

  it('includes the correct answer among options', () => {
    render(<ExampleSentenceQuiz kanji={mockKanji} onCorrect={() => {}} />);

    const optionTexts = [
      screen.getByTestId('sentence-option-0').textContent,
      screen.getByTestId('sentence-option-1').textContent,
      screen.getByTestId('sentence-option-2').textContent,
      screen.getByTestId('sentence-option-3').textContent
    ];

    expect(optionTexts).toContain('One apple, please.');
  });

  it('shows success feedback for correct answer', () => {
    render(<ExampleSentenceQuiz kanji={mockKanji} onCorrect={() => {}} />);

    const buttons = screen.getAllByRole('button');
    const correctButton = buttons.find(btn => btn.textContent === 'One apple, please.');
    fireEvent.click(correctButton);

    expect(screen.getByTestId('sentence-quiz-feedback')).toHaveTextContent('Correct');
  });

  it('shows error feedback for incorrect answer', () => {
    render(<ExampleSentenceQuiz kanji={mockKanji} onCorrect={() => {}} />);

    const buttons = screen.getAllByRole('button');
    const incorrectButton = buttons.find(btn => btn.textContent === 'Two apples, please.');
    fireEvent.click(incorrectButton);

    expect(screen.getByTestId('sentence-quiz-feedback')).toHaveTextContent('Not quite');
    expect(screen.getByTestId('sentence-quiz-feedback')).toHaveTextContent('One apple, please.');
  });

  it('calls onCorrect after correct answer with delay', () => {
    const mockOnCorrect = vi.fn();
    render(<ExampleSentenceQuiz kanji={mockKanji} onCorrect={mockOnCorrect} />);

    const buttons = screen.getAllByRole('button');
    const correctButton = buttons.find(btn => btn.textContent === 'One apple, please.');
    fireEvent.click(correctButton);

    expect(mockOnCorrect).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1000);

    expect(mockOnCorrect).toHaveBeenCalledTimes(1);
  });

  it('shows retry button for incorrect answer', () => {
    render(<ExampleSentenceQuiz kanji={mockKanji} onCorrect={() => {}} />);

    const buttons = screen.getAllByRole('button');
    const incorrectButton = buttons.find(btn => btn.textContent === 'Two apples, please.');
    fireEvent.click(incorrectButton);

    expect(screen.getByTestId('sentence-retry-button')).toBeInTheDocument();
  });

  it('resets state when retry is clicked', () => {
    render(<ExampleSentenceQuiz kanji={mockKanji} onCorrect={() => {}} />);

    const buttons = screen.getAllByRole('button');
    const incorrectButton = buttons.find(btn => btn.textContent === 'Two apples, please.');
    fireEvent.click(incorrectButton);

    fireEvent.click(screen.getByTestId('sentence-retry-button'));

    expect(screen.queryByTestId('sentence-quiz-feedback')).not.toBeInTheDocument();

    const newButtons = screen.getAllByRole('button');
    newButtons.forEach(btn => {
      expect(btn).not.toBeDisabled();
    });
  });

  it('disables buttons after selecting an answer', () => {
    render(<ExampleSentenceQuiz kanji={mockKanji} onCorrect={() => {}} />);

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);

    expect(screen.getByTestId('sentence-option-0')).toBeDisabled();
    expect(screen.getByTestId('sentence-option-1')).toBeDisabled();
    expect(screen.getByTestId('sentence-option-2')).toBeDisabled();
    expect(screen.getByTestId('sentence-option-3')).toBeDisabled();
  });
});
