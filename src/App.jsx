import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;