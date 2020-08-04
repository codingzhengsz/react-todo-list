import {
    ADD_TODO,
    DELETE_TODO
} from '../action/actionTypes'
import {
    createReducer
} from '@reduxjs/toolkit'

let initialState = {
    todos: []
}

export default createReducer(initialState, {
    [ADD_TODO]: (state, action) => ({
        todos: state.todos.concat(action.payload)
    }),
    [DELETE_TODO]: (state, action) => ({
        todos: state.todos.filter((item, index) => action.payload !== index)
    })
})