import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import Register from './components/Register';
import './App.css'


function App() {
  return (
  <React.Fragment>
    <Switch>
      <Route path='/register' component={Register} />
    </Switch>
  </React.Fragment>
  );
}

export default App;
