import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import Register from './components/Register';
import Todos from './Todo';


function App() {
  return (
  <React.Fragment>
      <NavigationBar />
      <Router>
    <Switch>
      <Route path='/register' component={Register} />
      <Route exact path='/todos' component={Todos} />
      {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
    </Switch>
      </Router>
  </React.Fragment>
  );
}

export default App;
