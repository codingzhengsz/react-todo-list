import React from 'react'
import Input from '../Input'
import TodoList from '../TodoList'
import Menu from '../Menu'

class TodoPage extends React.Component{

    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <Menu />
                <Input />
                <TodoList />
            </div>
        )
    }

}
export default TodoPage