import { useState } from 'react';
import { Container, Card, Form, Button, Alert, Modal, Badge } from 'react-bootstrap';
import useLocalStorage from '../hooks/useLocalStorage';
import { parseCustomKanjiList, isKanjiInData } from '../utils/kanjiUtils';

function SettingsPage() {
  const [completedEntries, setCompletedEntries] = useLocalStorage('completedEntries', []);
  const [customKanjiList, setCustomKanjiList] = useLocalStorage('customKanjiList', []);
  const [inputValue, setInputValue] = useState(customKanjiList.join(' '));
  const [showClearModal, setShowClearModal] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);

  const handleSaveCustomList = () => {
    const parsed = parseCustomKanjiList(inputValue);
    const validKanji = parsed.filter(isKanjiInData);
    const invalidKanji = parsed.filter(k => !isKanjiInData(k));

    setCustomKanjiList(validKanji);

    if (invalidKanji.length > 0) {
      setSaveMessage({
        type: 'warning',
        text: `Saved ${validKanji.length} kanji. ${invalidKanji.length} kanji not in database: ${invalidKanji.join(', ')}`
      });
    } else if (validKanji.length > 0) {
      setSaveMessage({
        type: 'success',
        text: `Saved ${validKanji.length} kanji to your custom list.`
      });
    } else {
      setSaveMessage({
        type: 'info',
        text: 'Custom list cleared.'
      });
    }

    setTimeout(() => setSaveMessage(null), 5000);
  };

  const handleClearProgress = () => {
    setCompletedEntries([]);
    setShowClearModal(false);
    setSaveMessage({
      type: 'success',
      text: 'All progress has been cleared.'
    });
    setTimeout(() => setSaveMessage(null), 5000);
  };

  const handleClearCustomList = () => {
    setCustomKanjiList([]);
    setInputValue('');
    setSaveMessage({
      type: 'info',
      text: 'Custom kanji list has been cleared.'
    });
    setTimeout(() => setSaveMessage(null), 5000);
  };

  return (
    <Container>
      <h2 className="mb-4">Settings</h2>

      {saveMessage && (
        <Alert
          variant={saveMessage.type}
          dismissible
          onClose={() => setSaveMessage(null)}
          data-testid="save-message"
        >
          {saveMessage.text}
        </Alert>
      )}

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Custom Kanji List</Card.Title>
          <Card.Text className="text-muted">
            Add kanji characters you want to learn in a specific order.
            These will be prioritized over the default frequency-based list.
          </Card.Text>

          <Form.Group className="mb-3">
            <Form.Label>Enter kanji (space or comma separated)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="日 月 火 水 木 金 土"
              data-testid="custom-kanji-input"
            />
            <Form.Text className="text-muted">
              Only kanji characters that exist in our database will be saved.
            </Form.Text>
          </Form.Group>

          <div className="d-flex gap-2">
            <Button
              variant="primary"
              onClick={handleSaveCustomList}
              data-testid="save-custom-button"
            >
              Save Custom List
            </Button>
            <Button
              variant="outline-secondary"
              onClick={handleClearCustomList}
              data-testid="clear-custom-button"
            >
              Clear Custom List
            </Button>
          </div>

          {customKanjiList.length > 0 && (
            <div className="mt-3">
              <strong>Current custom list ({customKanjiList.length} kanji):</strong>
              <div className="d-flex flex-wrap gap-1 mt-2" data-testid="current-custom-list">
                {customKanjiList.map((char) => (
                  <Badge key={char} bg="secondary" className="fs-6">
                    {char}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </Card.Body>
      </Card>

      <Card className="border-danger">
        <Card.Body>
          <Card.Title className="text-danger">Danger Zone</Card.Title>
          <Card.Text className="text-muted">
            Clear all your learning progress. This action cannot be undone.
          </Card.Text>

          <div className="mb-3">
            <strong>Current progress:</strong> {completedEntries.length} kanji learned
          </div>

          <Button
            variant="danger"
            onClick={() => setShowClearModal(true)}
            disabled={completedEntries.length === 0}
            data-testid="clear-progress-button"
          >
            Clear All Progress
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showClearModal} onHide={() => setShowClearModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Clear Progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to clear all your learning progress?</p>
          <p className="text-danger fw-bold">
            This will remove {completedEntries.length} learned kanji and cannot be undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowClearModal(false)}
            data-testid="cancel-clear-button"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleClearProgress}
            data-testid="confirm-clear-button"
          >
            Yes, Clear All Progress
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default SettingsPage;
