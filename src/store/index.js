import todos from '../reducers';
import loading from '../reducers/loading';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        todos: todos, 
        isLoading: loading
    }
})