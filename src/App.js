import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Projects from './pages/projects/projects';
import Certifications from './pages/certifications/certifications';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/certifications">
            <Certifications />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;