import * as types from './actionTypes'
import {createAction} from '@reduxjs/toolkit'

export const addTodoAction = createAction(types.ADD_TODO, (todoItem) => ({
    payload: todoItem
}))


export const deleteTodoAction = createAction(types.DELETE_TODO, (index) => ({
    payload: index
}))