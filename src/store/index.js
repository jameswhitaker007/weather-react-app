import { createStore } from "redux/dist/redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { favorites: [], recents: [] };

const sliceIfier = (length) => {
    return length > 11 ? length - 1 : 9;
}

const citySlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addFavorites(state, action) {
            state.favorites.push(action.payload)
        },
        addRecents(state, action) {
            state.recents.unshift(action.payload).slice(0, sliceIfier(state.recents.length))
        }
    }
});



/*
const weatherReducer = (state = initialState, action) => {
    if (action.type === 'addFavorite') {
        return {
            favorites: state.favorites.push(action.city),
            recents: state.recents
        }
    }
    if (action.type === 'addRecent') {
        /*
        let recents = state.recents.unshift(action.city);
        if (recents.length > 10) {
            recents = recents.slice(0, 9);
        }
        return {
            favorites: state.favorites,
            recents: state.recents
        }// --

        return {
            favorites: state.favorites,
            recents: state.recents.unshift(action.city).slice(0, sliceIfier(state.recents.length))
        }

    }
    return state;
};*/

export const cityActions = citySlice.actions

const store = configureStore({
    reducer: citySlice.reducer
});

export default store;