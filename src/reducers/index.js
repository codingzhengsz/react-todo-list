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
            id: action.payload.id,
            content: action.payload.content,
            status: action.payload.status
        })
    }),
    [DELETE_TODO]: (state, action) => ({
        todos: state.todos.filter((item, index) => action.payload !== index)
    }),
    [MARK_TODO]: (state, action) => ({
        todos: state.todos.map((item, index) => {
            if (action.payload === index) {
                return {
                    id: item.id,
                    content: item.content,
                    status: !item.status
                }
            }
            return item;
        })
    })
})