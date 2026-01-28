import { Card, Button } from 'react-bootstrap';
import HoverWord from './HoverWord';

function ExampleSentence({ kanji, onComplete }) {
  if (!kanji || !kanji.example) {
    return null;
  }

  const { example, vocabularyWord } = kanji;

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title className="mb-4">
          Example Sentence
        </Card.Title>

        <div
          style={{ fontSize: '2rem', marginBottom: '1rem' }}
          data-testid="example-sentence"
        >
          {example.words.map((word, index) => (
            <HoverWord
              key={index}
              text={word.text}
              reading={word.reading}
              meaning={word.meaning}
              isNewWord={word.isNewWord}
            />
          ))}
        </div>

        <p className="text-muted mb-4">
          <small>Hover over words to see their meaning</small>
        </p>

        <hr />

        <div className="mb-4">
          <h5>New Vocabulary</h5>
          <p className="fs-4 mb-1" data-testid="vocab-review">
            {vocabularyWord.word}
          </p>
          <p className="text-info mb-1">
            {vocabularyWord.reading}
          </p>
          <p className="text-muted">
            {vocabularyWord.meaning}
          </p>
        </div>

        <Button
          variant="success"
          size="lg"
          onClick={onComplete}
          data-testid="complete-button"
        >
          Mark as Learned
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ExampleSentence;
