import React from 'react';
import './App.css';
import TodoPage from './components/TodoPage'
import { HashRouter,Route } from 'react-router-dom'
import DonePage from './components/DonePage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={TodoPage} />
        <Route path="/finish" component={DonePage} />
      </HashRouter>
    </div>
  );
}

export default App;
