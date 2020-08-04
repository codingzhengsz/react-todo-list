import React from 'react'

class TodoItem extends React.Component {

    onDelete = () => {
        this.props.deleteTodoAction(this.props.id)
    }

    render() {
        return (
            <div>
                <span>{this.props.value}</span>
                <button onClick={this.onDelete}>X</button>
            </div>
        )
    }
}

export default TodoItem