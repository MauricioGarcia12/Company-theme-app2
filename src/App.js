
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import "./App.css"
import Homepage from './pages/Homepage';
function App() {
  return (
    <>
      <Router>
        <Homepage/>
      </Router>
    </>
  );
}

export default App;
