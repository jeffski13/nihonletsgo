import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import useLocalStorage from '../hooks/useLocalStorage';
import { getProgressStats, getAllKanji } from '../utils/kanjiUtils';

function ProgressPage() {
  const [completedEntries] = useLocalStorage('completedEntries', []);
  const stats = getProgressStats(completedEntries);
  const allKanji = getAllKanji();
  const learnedKanji = completedEntries.map(i => allKanji[i]).filter(Boolean);

  return (
    <Container>
      <h2 className="mb-4">Your Progress</h2>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body>
              <Card.Title className="text-muted">Kanji Learned</Card.Title>
              <p className="display-4" data-testid="learned-count">
                {stats.learned}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body>
              <Card.Title className="text-muted">Total Available</Card.Title>
              <p className="display-4" data-testid="total-count">
                {stats.total}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body>
              <Card.Title className="text-muted">Progress</Card.Title>
              <p className="display-4" data-testid="percentage">
                {stats.percentage}%
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <Card.Title className="mb-3">Learned Kanji</Card.Title>

          {learnedKanji.length === 0 ? (
            <p className="text-muted" data-testid="no-kanji-message">
              You haven't learned any kanji yet. Start learning to see your progress here!
            </p>
          ) : (
            <div
              className="d-flex flex-wrap gap-2"
              data-testid="kanji-grid"
            >
              {learnedKanji.map((entry, i) => (
                <Badge
                  key={i}
                  bg="primary"
                  className="p-3 d-flex flex-column align-items-center"
                  title={entry.meaning}
                  data-testid={`kanji-badge-${entry.character}`}
                >
                  <span style={{ fontSize: '1.5rem' }}>{entry.character}</span>
                  <span style={{ fontSize: '0.75rem' }}>{entry.characterReading}</span>
                </Badge>
              ))}
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProgressPage;
