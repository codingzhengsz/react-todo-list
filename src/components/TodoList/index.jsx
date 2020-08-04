import React from 'react'
import {connect} from 'react-redux'
import TodoItem from '../TotoItem';
import {deleteTodoAction} from '../../action'

class TodoList extends React.Component {

    render() {
        const initArray = [...Array(this.props.todos.length).keys()];
        return (
            <div>
                {
                    initArray.map(key => <TodoItem key={key} id={key} deleteTodoAction={this.props.deleteTodoAction} value={this.props.todos[key]}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {
    deleteTodoAction
  }

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)