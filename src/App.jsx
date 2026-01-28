import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LearnPage from './pages/LearnPage';
import ProgressPage from './pages/ProgressPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LearnPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
