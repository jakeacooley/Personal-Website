import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as Pages from './pages';
import NavBar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h3>Jake Cooley</h3>
        <Route exact path="/" component={Pages.Home}></Route>
        <Route path="/about" component={Pages.About}></Route>
        <Route path="/contact" component={Pages.Contact}></Route>
      </div>
    );
  }
}

export default App;
