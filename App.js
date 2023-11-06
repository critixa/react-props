import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ApplyNow from './ApplyNow';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/ApplyNow">Apply Now</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ApplyNow" element={<ApplyNow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;