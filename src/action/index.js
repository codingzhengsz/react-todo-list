import * as types from './actionTypes'
import {createAction} from '@reduxjs/toolkit'

export const addTodoAction = createAction(types.ADD_TODO, (item) => ({
    payload: item
}))

export const addAllTodoAction = createAction(types.ADD_ALL_TODO, (item) => ({
    payload: item
}))

export const deleteTodoAction = createAction(types.DELETE_TODO, (item) => ({
    payload: item
}))

export const markTodoAction = createAction(types.MARK_TODO, (item) => ({
    payload: item
}))
