import {
    createReducer
} from "@reduxjs/toolkit";
import {
    LOADING_TOGGLE
} from "../action/actionTypes";

let initStates = {
    loading: true
}

export default createReducer(initStates, {

    [LOADING_TOGGLE]: (state, action) => ({
        loading: action.payload.loading
    })
})