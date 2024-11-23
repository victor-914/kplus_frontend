// "use client"
// import { createSlice } from '@reduxjs/toolkit';
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { thunk } from 'redux-thunk';

// const initialState = {
//   favorites: [],
// };

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     // Add a property to favorites
//     addFavorite: (state, action) => {
//       const property = action.payload;
//       if (!state.favorites.some(fav => fav.id === property.id)) {
//         state.favorites.push(property);
//       }
//     },

//     // Remove a property from favorites
//     removeFavorite: (state, action) => {
//       const propertyId = action.payload;
//       state.favorites = state.favorites.filter(fav => fav.id !== propertyId);
//     },

//     // Toggle favorite status (add or remove)
//     toggleFavorite: (state, action) => {
//       const property = action.payload;
//       const isFavorite = state.favorites.some(fav => fav.id === property.id);
//       if (isFavorite) {
//         state.favorites = state.favorites.filter(fav => fav.id !== property.id);
//       } else {
//         state.favorites.push(property);
//       }
//     },
//   },
// });

// export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;





// const reducers = combineReducers({
//   fav: favoritesSlice.reducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["fav"],
// };

// const persistedFavReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedFavReducer,
//   //   devTools: process.env.NODE_ENV !== 'production',
//   // middleware: [thunk],
// });

// export const persistor = persistStore(store);

// export default store;

"use client";
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Initial state for the favorites slice
const initialState = {
  favorites: [],
};

// Create a slice for favorites
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // Add a property to favorites
    addFavorite: (state, action) => {
      const property = action.payload;
      if (!state.favorites.some(fav => fav.id === property.id)) {
        state.favorites.push(property);
      }
    },

    // Remove a property from favorites
    removeFavorite: (state, action) => {
      const propertyId = action.payload;
      state.favorites = state.favorites.filter(fav => fav.id !== propertyId);
    },

    // Toggle favorite status (add or remove)
    toggleFavorite: (state, action) => {
      const property = action.payload;
      const isFavorite = state.favorites.some(fav => fav.id === property.id);
      if (isFavorite) {
        state.favorites = state.favorites.filter(fav => fav.id !== property.id);
      } else {
        state.favorites.push(property);
      }
    },
  },
});

// Export actions from the slice
export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;

// Persist config to store the state in local storage
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"], // Only persist the 'favorites' slice
};

const persistedFavoritesReducer = persistReducer(persistConfig, favoritesSlice.reducer);

 export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer, 
  },
});

export const persistor = persistStore(store);





