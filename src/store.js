import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'weather',
    initialState: {
        weather: ['firstState']
    },
    reducers: {
        add: (state, action) => {

        },
        update: (state, action) => {

        },
        remove: (state, action) => {

        }
    }
});

const sliceReducer = slice.reducer;
export const { add, update, remove } = slice.actions;
const reducer = combineReducers({
    sliceReducer
});
const store = configureStore({ reducer });

export default store;