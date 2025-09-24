import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProjectTemplate from './components/ProjectTemplate';
import LivingCollection from './pages/LivingCollection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:projectId" element={<ProjectTemplate />} />
        <Route path="/living-collection" element={<LivingCollection />} />
      </Routes>
    </Router>
  );
}

export default App
