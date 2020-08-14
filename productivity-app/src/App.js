import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import Register from './components/Register';
import Todos from './Todo';
import Home from './components/Home'

function App() {
  return (
  <React.Fragment>
      <NavigationBar />
      <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/todos' component={Todos} />
      {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
    </Switch>
      </Router>
  </React.Fragment>
  );
}

export default App;
