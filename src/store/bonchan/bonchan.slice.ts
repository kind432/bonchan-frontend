import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const LS_FAV_KEY = "rfk"

interface BonchanState {
    favorites: string[]
}

const initialState: BonchanState = {
    favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const bonchanSlice = createSlice({
    name: "bonchan",
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favorites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(f => f !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
        }
    }
})

export const bonchanActions  = bonchanSlice.actions
export const bonchanReducer = bonchanSlice.reducer