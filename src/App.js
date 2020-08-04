import React from 'react';
import './App.css';
import Input from './components/Input'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input />
        <TodoList/>
      </header>
    </div>
  );
}


export default App;
