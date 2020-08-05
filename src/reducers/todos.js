import {
    ADD_TODO,
    DELETE_TODO,
    MARK_TODO,
    ADD_ALL_TODO
} from '../action/actionTypes'
import {
    createReducer
} from '@reduxjs/toolkit'

export default createReducer([], {
    [ADD_TODO]: (state, action) => (
        [action.payload, ...state]
    ),
    [DELETE_TODO]: (state, action) => (
        state.filter((item, index) => action.payload !== item.id)
    ),
    [MARK_TODO]: (state, action) => (
        state.map((item, index) => {
            if (action.payload === item.id) {
                return {
                    id: item.id,
                    content: item.content,
                    status: !item.status
                }
            }
            return item;
        })
    ),
    [ADD_ALL_TODO]: (state, action) => (
        action.payload
    )
})