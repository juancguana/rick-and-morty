import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Single from './pages/Single'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div >
          <Route exact path="/" component={Home} />
          <Route exact path="/personaje/:id" component={Single} />
      </div>
    </Router>
  );
}

export default App;