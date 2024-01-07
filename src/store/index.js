import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { favorites: [], recents: [], codes: [] };

const sliceIfier = (length) => {
    return length > 11 ? length - 1 : 9;
}

const citySlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addFavorites(state, action) {
            console.log('inside citySlice');
            state.favorites.push(action.payload);
        },
        removeFavorites(state, action) {
            state.favorites.map((favorite, index) => {
                if(favorite.id === action.payload) {
                    state.favorites.splice(index, 1);
                }
            })

        },
        addRecents(state, action) {
            let recentExists = false;
            state.recents.map((recent) => {
                if (recent.id === action.payload.id) {
                    recentExists = true;
                }
            })
            if (!recentExists){
                state.recents.unshift(action.payload);
            }
        },
        addFavoriteCityCode(state, action){
            state.codes.push(action.payload)
        },
        removeFavoriteCityCode(state, action) {
            const index = state.codes.indexOf(action.payload);
            if (index > -1) {
                state.codes.splice(index, 1)
            }
        }
    }
});



const store = configureStore({
    reducer: citySlice.reducer
});

export const cityActions = citySlice.actions;

export default store;