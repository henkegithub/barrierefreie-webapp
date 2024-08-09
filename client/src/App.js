import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Barrierefreie und Responsive Webapp</h1>
        <p>
          Diese Webapp passt sich an verschiedene Bildschirmgrößen an und ist barrierefrei.
        </p>
        <button className="accessible-button" aria-label="Mehr erfahren">Mehr erfahren</button>
      </header>
    </div>
  );
}

export default App;
