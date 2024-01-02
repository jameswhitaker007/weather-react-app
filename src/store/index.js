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

export const cityActions = citySlice.actions

const store = configureStore({
    reducer: citySlice.reducer
});

export default store;