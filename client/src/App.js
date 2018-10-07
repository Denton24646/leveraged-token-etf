import React, { Component } from "react";
import { Navigation } from './navigation/navigation'
import "./App.css";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
