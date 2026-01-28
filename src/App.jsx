import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Teams from './pages/Teams';
import Join from './pages/Join';
import PaperFund from './pages/PaperFund';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="teams" element={<Teams />} />
          <Route path="join" element={<Join />} />
          <Route path="paper-fund" element={<PaperFund />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
