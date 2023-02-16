import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage } from './components/Homepage';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
