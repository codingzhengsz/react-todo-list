import {
    MethodType,
    request
} from '../promise'

const basicUrl = "https://5e9ec500fb467500166c4658.mockapi.io/todos"

// GET: /todos
export const todoList = async () => {
    return await request(basicUrl, MethodType.GET)
}


// PUT: /todos/{id}
export const updateTodo = async (id, body) => {
    let requestBody = JSON.stringify(body)
    return await request(basicUrl + "/" + id, MethodType.PUT, requestBody)
}

// POST: /todos
export const addTodo = async (body) => {
    let requestBody = JSON.stringify(body)
    return await request(basicUrl, MethodType.POST, requestBody)
}

// DELETE: /todos/{id}
export const deleteTodo = async (id) => {
    return await request(basicUrl + "/" + id, MethodType.DELETE)
}