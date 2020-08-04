import React from 'react'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux'
import { deleteTodoAction, markTodoAction } from '../../action'
import Menu from '../Menu'


class DonePage extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <h1>Finished Todo</h1>
                {
                    this.props.todos.map((item, index) => {
                        if (item.mark) {
                            return <TodoItem key={index} id={index}
                                item={item} 
                                deleteTodoAction={this.props.deleteTodoAction}
                                markTodoAction={this.props.markTodoAction}
                                />
                        }
                        return null
                    }).filter(item => item != null)
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


export default connect(mapStateToProps,mapDispatchToProps)(DonePage)