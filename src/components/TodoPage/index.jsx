import React from 'react'
import Input from '../Input'
import TodoList from '../TodoList'


class TodoPage extends React.Component{

    render(){
        return (
            <div>
                <Input />
                <TodoList />
            </div>
        )
    }

}
export default TodoPage