import {
    ADD_TODO,
    DELETE_TODO,
    MARK_TODO
} from '../action/actionTypes'
import {
    createReducer
} from '@reduxjs/toolkit'

let initialState = {
    todos: []
}

export default createReducer(initialState, {
    [ADD_TODO]: (state, action) => ({
        todos: state.todos.concat({
            todoItem: action.payload,
            mark: false
        })
    }),
    [DELETE_TODO]: (state, action) => ({
        todos: state.todos.filter((item, index) => action.payload !== index)
    }),
    [MARK_TODO]: (state, action) => ({
        todos: state.todos.map((item, index) => {
            if (action.payload === index) {
                return {
                    todoItem: item.todoItem,
                    mark: !item.mark
                }
            }
            return item;
        })
    })
})