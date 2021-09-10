import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Single from './pages/Single';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/personaje/:id' component={Single} />
    </Switch>
  );
}

export default App;
