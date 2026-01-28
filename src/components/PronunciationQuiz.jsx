import { useState, useEffect } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { getPronunciationQuizOptions } from '../utils/kanjiUtils';

function PronunciationQuiz({ kanji, onCorrect }) {
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (kanji) {
      setOptions(getPronunciationQuizOptions(kanji.characterReading, kanji.character));
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
    setOptions(getPronunciationQuizOptions(kanji.characterReading, kanji.character));
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title className="mb-4">
          How do you read this kanji in the word "{kanji.vocabularyWord.word}"?
        </Card.Title>

        <div
          style={{ fontSize: '5rem', marginBottom: '2rem' }}
          data-testid="pronunciation-character"
        >
          {kanji.character}
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
              data-testid={`pronunciation-option-${index}`}
              style={{ fontSize: '1.5rem' }}
            >
              {option.value}
            </Button>
          ))}
        </div>

        {showFeedback && (
          <Alert
            variant={isCorrect ? 'success' : 'danger'}
            className="mt-4"
            data-testid="pronunciation-feedback"
          >
            {isCorrect ? (
              'Correct! Well done!'
            ) : (
              <>
                <p className="mb-2">
                  Not quite. The correct reading is: <strong style={{ fontSize: '1.25rem' }}>{kanji.characterReading}</strong>
                </p>
                <Button variant="outline-danger" onClick={handleRetry} data-testid="pronunciation-retry-button">
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

export default PronunciationQuiz;
