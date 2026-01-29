import { useState, useEffect } from 'react';
import { Container, Alert, ProgressBar } from 'react-bootstrap';
import KanjiIntro from '../components/KanjiIntro';
import KanjiQuiz from '../components/KanjiQuiz';
import PronunciationQuiz from '../components/PronunciationQuiz';
import ExampleSentenceQuiz from '../components/ExampleSentenceQuiz';
import ExampleSentence from '../components/ExampleSentence';
import useLocalStorage from '../hooks/useLocalStorage';
import { getNextKanji, getProgressStats } from '../utils/kanjiUtils';

const STEPS = {
  INTRO: 'intro',
  QUIZ: 'quiz',
  PRONUNCIATION: 'pronunciation',
  SENTENCE_QUIZ: 'sentence_quiz',
  EXAMPLE: 'example'
};

function LearnPage() {
  const [learnedKanji, setLearnedKanji] = useLocalStorage('learnedKanji', []);
  const [customKanjiList] = useLocalStorage('customKanjiList', []);
  const [currentKanji, setCurrentKanji] = useState(null);
  const [step, setStep] = useState(STEPS.INTRO);

  useEffect(() => {
    const nextKanji = getNextKanji(learnedKanji, customKanjiList);
    setCurrentKanji(nextKanji);
    setStep(STEPS.INTRO);
  }, [learnedKanji, customKanjiList]);

  const handleReadyForQuiz = () => {
    setStep(STEPS.QUIZ);
  };

  const handleQuizCorrect = () => {
    setStep(STEPS.PRONUNCIATION);
  };

  const handlePronunciationCorrect = () => {
    setStep(STEPS.SENTENCE_QUIZ);
  };

  const handleSentenceQuizCorrect = () => {
    setStep(STEPS.EXAMPLE);
  };

  const handleMarkLearned = () => {
    if (currentKanji) {
      setLearnedKanji(prev => [...prev, currentKanji.character]);
    }
  };

  const stats = getProgressStats(learnedKanji);

  if (!currentKanji) {
    return (
      <Container>
        <Alert variant="success" className="text-center" data-testid="all-learned-alert">
          <Alert.Heading>Congratulations!</Alert.Heading>
          <p>
            You have learned all available kanji. Great job!
          </p>
          <p className="mb-0">
            Visit the Settings page to add more kanji to your custom list,
            or clear your progress to start over.
          </p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span>Progress: {stats.learned} / {stats.total} kanji learned</span>
          <span data-testid="step-indicator">
            Step {step === STEPS.INTRO ? 1 : step === STEPS.QUIZ ? 2 : step === STEPS.PRONUNCIATION ? 3 : step === STEPS.SENTENCE_QUIZ ? 4 : 5} of 5
          </span>
        </div>
        <ProgressBar
          now={stats.percentage}
          label={`${stats.percentage}%`}
          data-testid="progress-bar"
        />
      </div>

      {step === STEPS.INTRO && (
        <KanjiIntro kanji={currentKanji} onReady={handleReadyForQuiz} />
      )}

      {step === STEPS.QUIZ && (
        <KanjiQuiz kanji={currentKanji} onCorrect={handleQuizCorrect} />
      )}

      {step === STEPS.PRONUNCIATION && (
        <PronunciationQuiz kanji={currentKanji} onCorrect={handlePronunciationCorrect} />
      )}

      {step === STEPS.SENTENCE_QUIZ && (
        <ExampleSentenceQuiz kanji={currentKanji} onCorrect={handleSentenceQuizCorrect} />
      )}

      {step === STEPS.EXAMPLE && (
        <ExampleSentence kanji={currentKanji} onComplete={handleMarkLearned} />
      )}
    </Container>
  );
}

export default LearnPage;
