import React from 'react';
import { Route } from 'react-router-dom';
import Single from './pages/Single';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/personaje/:id' component={Single} />
    </div>
  );
}

export default App;
