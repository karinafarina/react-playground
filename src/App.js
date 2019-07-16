import React from 'react';
import Split from './composition/Split';
import './App.css';

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={2}>This is the content for left Lorem Ipsum</Split>
      <Split className="right">This is content for the right Lorem</Split>
    </main>
  );
}

export default App;
