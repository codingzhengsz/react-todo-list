import {
    createReducer
} from "@reduxjs/toolkit";
import {
    LOADING_TOGGLE
} from "../action/actionTypes";

export default createReducer(true, {

    [LOADING_TOGGLE]: (state, action) => (
        action.payload.loading
    )
})