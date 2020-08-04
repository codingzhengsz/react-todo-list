import React from 'react';
import './App.css';
import TodoPage from './components/TodoPage'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={TodoPage} />
      </HashRouter>
    </div>
  );
}


export default App;
