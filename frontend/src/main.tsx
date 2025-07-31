import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Survivor from './pages/Survivor';
import Killer from './pages/Killer';
import Selection from './pages/Selection';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/survivor" element={<Survivor />} />
        <Route path="/killer" element={<Killer />} />
      </Routes>
    </Router>
  </StrictMode>,
);