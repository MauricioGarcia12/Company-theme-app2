
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import "./App.css"
import Homepage from './pages/Homepage';
import Signin from './pages/Signin'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Homepage} exact/>
          <Route path="/signin" component={Signin} exact/>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
