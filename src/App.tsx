import './App.css';
import React from 'react'
import Son from './pages/Son';
import { useCount } from './store';

function App() {
  const context = useCount()
  return (
    <div className="App">
      <div>这是一个组件{context.state.count}</div>
      <Son />
    </div>
  );
}

export default App;
