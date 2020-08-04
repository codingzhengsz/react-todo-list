import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem';
import { deleteTodoAction, markTodoAction } from '../../action'

class TodoList extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.todos.map((item, index) => <TodoItem
                        key={index}
                        id={index}
                        deleteTodoAction={this.props.deleteTodoAction}
                        markTodoAction={this.props.markTodoAction}
                        value={item}
                        item={item} />)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {
    deleteTodoAction,
    markTodoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)