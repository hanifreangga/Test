import React, { Component } from "react";
import "./App.css";
import Datas from "./components/Datas";

import { getDatas } from "./services/DataService";

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1>Data</h1>
        <Datas />
      </main>
    );
  }
}

export default App;
