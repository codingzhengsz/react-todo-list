import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem';
import { deleteTodoAction, markTodoAction,addTodoAction,addAllTodoAction } from '../../action'
import {todoList} from '../../api'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {todos: []}
    }

    componentWillMount() {
        todoList().then(response => {
            this.props.addAllTodoAction(response.data.reverse())
        })
    }

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
    markTodoAction,
    addTodoAction,
    addAllTodoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)