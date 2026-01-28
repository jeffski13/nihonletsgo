import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import KanjiQuiz from './KanjiQuiz';

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
    words: []
  }
};

describe('KanjiQuiz', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders nothing when kanji is null', () => {
    const { container } = render(<KanjiQuiz kanji={null} onCorrect={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('displays the quiz word', () => {
    render(<KanjiQuiz kanji={mockKanji} onCorrect={() => {}} />);
    expect(screen.getByTestId('quiz-word')).toHaveTextContent('食べる');
  });

  it('displays 4 options', () => {
    render(<KanjiQuiz kanji={mockKanji} onCorrect={() => {}} />);
    expect(screen.getByTestId('option-0')).toBeInTheDocument();
    expect(screen.getByTestId('option-1')).toBeInTheDocument();
    expect(screen.getByTestId('option-2')).toBeInTheDocument();
    expect(screen.getByTestId('option-3')).toBeInTheDocument();
  });

  it('includes the correct answer among options', () => {
    render(<KanjiQuiz kanji={mockKanji} onCorrect={() => {}} />);

    const optionTexts = [
      screen.getByTestId('option-0').textContent,
      screen.getByTestId('option-1').textContent,
      screen.getByTestId('option-2').textContent,
      screen.getByTestId('option-3').textContent
    ];

    expect(optionTexts).toContain('to eat');
  });

  it('shows success feedback for correct answer', async () => {
    render(<KanjiQuiz kanji={mockKanji} onCorrect={() => {}} />);

    // Find and click the correct answer
    const buttons = screen.getAllByRole('button');
    const correctButton = buttons.find(btn => btn.textContent === 'to eat');
    fireEvent.click(correctButton);

    expect(screen.getByTestId('quiz-feedback')).toHaveTextContent('Correct');
  });

  it('shows error feedback for incorrect answer', () => {
    render(<KanjiQuiz kanji={mockKanji} onCorrect={() => {}} />);

    // Find and click an incorrect answer
    const buttons = screen.getAllByRole('button');
    const incorrectButton = buttons.find(btn => btn.textContent === 'to drink');
    fireEvent.click(incorrectButton);

    expect(screen.getByTestId('quiz-feedback')).toHaveTextContent('Not quite');
    expect(screen.getByTestId('quiz-feedback')).toHaveTextContent('to eat');
  });

  it('calls onCorrect after correct answer with delay', async () => {
    const mockOnCorrect = vi.fn();
    render(<KanjiQuiz kanji={mockKanji} onCorrect={mockOnCorrect} />);

    const buttons = screen.getAllByRole('button');
    const correctButton = buttons.find(btn => btn.textContent === 'to eat');
    fireEvent.click(correctButton);

    expect(mockOnCorrect).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1000);

    expect(mockOnCorrect).toHaveBeenCalledTimes(1);
  });

  it('shows retry button for incorrect answer', () => {
    render(<KanjiQuiz kanji={mockKanji} onCorrect={() => {}} />);

    const buttons = screen.getAllByRole('button');
    const incorrectButton = buttons.find(btn => btn.textContent === 'to drink');
    fireEvent.click(incorrectButton);

    expect(screen.getByTestId('retry-button')).toBeInTheDocument();
  });

  it('resets state when retry is clicked', () => {
    render(<KanjiQuiz kanji={mockKanji} onCorrect={() => {}} />);

    // Click incorrect answer
    const buttons = screen.getAllByRole('button');
    const incorrectButton = buttons.find(btn => btn.textContent === 'to drink');
    fireEvent.click(incorrectButton);

    // Click retry
    fireEvent.click(screen.getByTestId('retry-button'));

    // Feedback should be hidden
    expect(screen.queryByTestId('quiz-feedback')).not.toBeInTheDocument();

    // Buttons should be enabled again
    const newButtons = screen.getAllByRole('button');
    newButtons.forEach(btn => {
      expect(btn).not.toBeDisabled();
    });
  });

  it('disables buttons after selecting an answer', () => {
    render(<KanjiQuiz kanji={mockKanji} onCorrect={() => {}} />);

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);

    // All option buttons should be disabled (excluding retry button if shown)
    expect(screen.getByTestId('option-0')).toBeDisabled();
    expect(screen.getByTestId('option-1')).toBeDisabled();
    expect(screen.getByTestId('option-2')).toBeDisabled();
    expect(screen.getByTestId('option-3')).toBeDisabled();
  });
});
