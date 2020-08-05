import React, { Fragment } from 'react'
import { updateTodo, deleteTodo } from '../../api'
import { Button } from 'antd'

class TodoItem extends React.Component {

    onDelete = () => {
        deleteTodo(this.props.item.id).then(response => {
            alert('Delete Success!')
            this.props.deleteTodoAction(this.props.item.id)
        }).catch(response => {
            alert('This item is not exist!')
            this.props.deleteTodoAction(this.props.item.id)
        })
    }

    onMark = () => {
        this.props.markTodoAction(this.props.item.id)
        updateTodo(this.props.item.id, { "status": !this.props.item.status })
    }
    
    render() {
        return (
            <Fragment>
                <span style={{ textDecorationLine: this.props.item.status ? "line-through" : "none" }}
                    onClick={this.onMark}>{this.props.item.content}</span>
                <Button onClick={this.onDelete}>X</Button>
            </Fragment>
        )
    }
}

export default TodoItem