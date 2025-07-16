import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Upload from './pages/Upload';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
