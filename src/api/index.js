import axios from 'axios'
import store from '../store'
import {
    LOADING_TOGGLE
} from '../action/actionTypes'

const basicUrl = "https://5e9ec500fb467500166c4658.mockapi.io/todos"

const todoApi = axios.create({
    baseURL: basicUrl
})

todoApi.interceptors.request.use(req => {
    store.dispatch({
        type: LOADING_TOGGLE,
        payload: {
            loading: true
        }
    });
    return req;
}, error => error);

todoApi.interceptors.response.use(req => {
    store.dispatch({
        type: LOADING_TOGGLE,
        payload: {
            loading: false
        }
    });
    return req;
}, error => error);

// GET: /todos
export const todoList = async () => {
    return await todoApi.get()
}

// PUT: /todos/{id}
export const updateTodo = async (id, body) => {
    return await todoApi.put(`/${id}`, body)
}

// POST: /todos
export const addTodo = async (body) => {
    return await todoApi.post('', body)
}

// DELETE: /todos/{id}
export const deleteTodo = async (id) => {
    return await todoApi.delete(`/${id}`)
}