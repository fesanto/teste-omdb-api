import React, {Component} from 'react';
import './App.css';
import Buscador from "./components/Buscador"

class App extends Component {
  render(){
  return (
    <div className="App">
      <Buscador></Buscador>
    </div>
  );
  }
}

export default App;
