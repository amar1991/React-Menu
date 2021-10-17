import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import {GlobalStyle} from './Components/StyledComponents/GlobalStyles';
import {Navbar} from './Components/Navbar';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';

function App() {

  

  return (
    <>
      <GlobalStyle />
      <Router>
      <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}  />
            <Route path="/contact" component={Contact} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
