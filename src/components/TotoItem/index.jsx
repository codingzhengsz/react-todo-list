import React from 'react'

class TodoItem extends React.Component {

    onDelete = () => {
        this.props.deleteTodoAction(this.props.id)
    }

    onMark = () => {
        this.props.markTodoAction(this.props.id)
    }

    render() {
        return (
            <div>
                <span style={{textDecorationLine: this.props.item.mark ? "line-through" : "none"}} 
                    onClick={this.onMark}>{this.props.value.todoItem}</span>
                <button onClick={this.onDelete}>X</button>
            </div>
        )
    }
}

export default TodoItem