import React from 'react'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import TodoMenu from '../TodoMenu'

class TodoPage extends React.Component{

    render(){
        return (
            <div>
                <TodoMenu />
                <h1>Todo List Demo</h1>
                <TodoInput />
                <TodoList />
            </div>
        )
    }

}
export default TodoPage