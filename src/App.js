import React from 'react';
import './App.css';
import Input from './components/Input'
import TodoList from './components/TodoList'
import {addTodoAction, deleteTodoAction} from './action'
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Input addTodoAction={props.addTodoAction}/>
        <TodoList deleteTodoAction={props.deleteTodoAction}/>
      </header>
    </div>
  );
}

const mapDispatchToProps = {
  addTodoAction,
  deleteTodoAction
}

export default connect(null, mapDispatchToProps)(App);
