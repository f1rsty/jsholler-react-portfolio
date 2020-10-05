import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReactComponent as CaretIcon } from './icons/caret.svg'

import Navbar from './components/navbar/navbar'
import NavItem from './components/navitem/navitem'
import DropdownMenu from './components/dropdown/dropdown'
import Home from './pages/home/home'
import Projects from './pages/projects/projects';
import Certifications from './pages/certifications/certifications';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu>
            <a href="/">Home</a>
            </DropdownMenu>
        </NavItem>
      </Navbar>

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