import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProjectTemplate from './components/ProjectTemplate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:projectId" element={<ProjectTemplate />} />
      </Routes>
    </Router>
  );
}

export default App
