import React from 'react'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux'
import { deleteTodoAction, markTodoAction } from '../../action'
import TodoMenu from '../TodoMenu'
import { List } from 'antd'


class DonePage extends React.Component {
    render() {
        return (
            <div>
                <TodoMenu />
                <h1>Finished Todo</h1>
                <List bordered dataSource={this.props.todos.filter((item, index) => item.status)}
                    style={{ width: '50%', margin: '20px auto' }} renderItem={item => (
                        <List.Item>
                            <TodoItem
                                key={item.id}
                                deleteTodoAction={this.props.deleteTodoAction}
                                markTodoAction={this.props.markTodoAction}
                                item={item} />
                        </List.Item>)}>
                </List>
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


export default connect(mapStateToProps, mapDispatchToProps)(DonePage)