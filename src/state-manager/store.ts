import { configureStore, combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"
import talentReducer from "./talent-reducer"

const persistConfig = {
	key: "root",
	storage,
	blacklist: [
        "talent"
	],
};

const rootReducers = combineReducers({
    talent: talentReducer,
    
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)

// Typescript

export type RootState = ReturnType<typeof rootReducers>

export type AppDispatch = typeof store.dispatch

