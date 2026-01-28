import { useState, useEffect } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { getQuizOptions } from '../utils/kanjiUtils';

function KanjiQuiz({ kanji, onCorrect }) {
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (kanji) {
      const { meaning, distractors } = kanji.vocabularyWord;
      setOptions(getQuizOptions(meaning, distractors));
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
    }
  }, [kanji]);

  if (!kanji) {
    return null;
  }

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setShowFeedback(true);
    setIsCorrect(option.isCorrect);

    if (option.isCorrect) {
      // Delay to show success feedback before advancing
      setTimeout(() => {
        onCorrect();
      }, 1000);
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    // Reshuffle options on retry
    const { meaning, distractors } = kanji.vocabularyWord;
    setOptions(getQuizOptions(meaning, distractors));
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title className="mb-4">
          What does this word mean?
        </Card.Title>

        <div
          style={{ fontSize: '3rem', marginBottom: '2rem' }}
          data-testid="quiz-word"
        >
          {kanji.vocabularyWord.word}
        </div>

        <div className="d-grid gap-2" style={{ maxWidth: '400px', margin: '0 auto' }}>
          {options.map((option, index) => (
            <Button
              key={index}
              variant={
                showFeedback
                  ? option.isCorrect
                    ? 'success'
                    : selectedAnswer === option
                      ? 'danger'
                      : 'outline-secondary'
                  : 'outline-primary'
              }
              size="lg"
              onClick={() => !showFeedback && handleAnswer(option)}
              disabled={showFeedback}
              data-testid={`option-${index}`}
            >
              {option.value}
            </Button>
          ))}
        </div>

        {showFeedback && (
          <Alert
            variant={isCorrect ? 'success' : 'danger'}
            className="mt-4"
            data-testid="quiz-feedback"
          >
            {isCorrect ? (
              'Correct! Well done!'
            ) : (
              <>
                <p className="mb-2">Not quite. The correct answer is: <strong>{kanji.vocabularyWord.meaning}</strong></p>
                <Button variant="outline-danger" onClick={handleRetry} data-testid="retry-button">
                  Try Again
                </Button>
              </>
            )}
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}

export default KanjiQuiz;
