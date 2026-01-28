import { Card, Button } from 'react-bootstrap';

function KanjiIntro({ kanji, onReady }) {
  if (!kanji) {
    return null;
  }

  const { character, meaning, vocabularyWord } = kanji;

  return (
    <Card className="text-center">
      <Card.Body>
        <div
          style={{ fontSize: '8rem', lineHeight: 1.2 }}
          data-testid="kanji-character"
        >
          {character}
        </div>
        <Card.Text className="text-muted mb-4" data-testid="kanji-meaning">
          {meaning}
        </Card.Text>

        <hr />

        <h4 className="mt-4">Vocabulary</h4>
        <div
          style={{ fontSize: '2.5rem' }}
          data-testid="vocabulary-word"
        >
          {vocabularyWord.word}
        </div>
        <div
          className="text-info fs-4"
          data-testid="vocabulary-reading"
        >
          {vocabularyWord.reading}
        </div>
        <div
          className="text-muted fs-5 mb-4"
          data-testid="vocabulary-meaning"
        >
          {vocabularyWord.meaning}
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={onReady}
          data-testid="ready-button"
        >
          Ready to Test
        </Button>
      </Card.Body>
    </Card>
  );
}

export default KanjiIntro;
