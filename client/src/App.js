import React, { Component } from 'react';
import * as Components from './Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="home" className="page">
          <span id="front-page">
            <Components.Home />
            <Components.Nav />
          </span>
        </section>
        <section id="about" className="page">
          <span>
            <Components.About />
          </span>
        </section>
        <section id="portfolio" className="page">
          <Components.Portfolio />
        </section>
        <section id="contact">
          <Components.Contact />
        </section>
      </div>
    );
  }
}

export default App;
