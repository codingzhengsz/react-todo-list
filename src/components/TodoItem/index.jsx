import React from 'react'
import {updateTodo} from '../../api'

class TodoItem extends React.Component {

    onDelete = () => {
        this.props.deleteTodoAction(this.props.id)
    }

    onMark = () => {
        this.props.markTodoAction(this.props.id)
        updateTodo(this.props.item.id, {"status": !this.props.item.status})
    }

    render() {
        return (
            <div>
                <span style={{textDecorationLine: this.props.item.status ? "line-through" : "none"}} 
                    onClick={this.onMark}>{this.props.item.content}</span>
                <button onClick={this.onDelete}>X</button>
            </div>
        )
    }
}

export default TodoItem