import todos from '../reducers/todos';
import loading from '../reducers/loading';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        todos, loading
    }
})