import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem';
import { deleteTodoAction, markTodoAction, addTodoAction, addAllTodoAction } from '../../action'
import { todoList } from '../../api'
import { List } from 'antd';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { todos: [] }
    }

    componentDidMount() {
        todoList().then(response => {
            this.props.addAllTodoAction(response.data.reverse())
        })
    }

    render() {
        return (
            <List bordered dataSource={this.props.todos} style={{ width: '36%', margin: '20px auto' }} renderItem={item => (
                <List.Item>
                    <TodoItem
                        key={item.id}
                        deleteTodoAction={this.props.deleteTodoAction}
                        markTodoAction={this.props.markTodoAction}
                        item={item} />
                </List.Item>)}>
            </List>
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