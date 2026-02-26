import { useState, useEffect } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { getSentenceQuizOptions } from '../utils/kanjiUtils';

function ExampleSentenceQuiz({ kanji, example, onCorrect }) {
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (example) {
      const { sentenceMeaning, incorrectSentenceMeanings } = example;
      setOptions(getSentenceQuizOptions(sentenceMeaning, incorrectSentenceMeanings));
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
    }
  }, [example]);

  if (!kanji || !example) {
    return null;
  }

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setShowFeedback(true);
    setIsCorrect(option.isCorrect);

    if (option.isCorrect) {
      setTimeout(() => {
        onCorrect();
      }, 1000);
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    const { sentenceMeaning, incorrectSentenceMeanings } = example;
    setOptions(getSentenceQuizOptions(sentenceMeaning, incorrectSentenceMeanings));
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title className="mb-4">
          What does this sentence mean?
        </Card.Title>

        <div
          style={{ fontSize: '1.75rem', marginBottom: '2rem' }}
          data-testid="sentence-quiz-sentence"
        >
          {example.sentence}
        </div>

        <div className="d-grid gap-2" style={{ maxWidth: '500px', margin: '0 auto' }}>
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
              data-testid={`sentence-option-${index}`}
            >
              {option.value}
            </Button>
          ))}
        </div>

        {showFeedback && (
          <Alert
            variant={isCorrect ? 'success' : 'danger'}
            className="mt-4"
            data-testid="sentence-quiz-feedback"
          >
            {isCorrect ? (
              'Correct! Well done!'
            ) : (
              <>
                <p className="mb-2">
                  Not quite. The correct meaning is: <strong>{example.sentenceMeaning}</strong>
                </p>
                <Button variant="outline-danger" onClick={handleRetry} data-testid="sentence-retry-button">
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

export default ExampleSentenceQuiz;
