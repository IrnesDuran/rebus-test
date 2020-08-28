import React from 'react';
import logo from './logo.svg';
import './App.css';
import Facade from './components/Facade/Facade';

function App() {
  const sectionSize = [1, 2, 3, 4];
  const panelsNumber = ['a', 'b', 'c', 'd'];
  return (
    <div className="App">
      <Facade sectionSize={sectionSize} panelsNumber={panelsNumber} />
    </div>
  );
}

export default App;
