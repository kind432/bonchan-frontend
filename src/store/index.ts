import {configureStore} from "@reduxjs/toolkit";
import {bonchanApi} from "./bonchan/bonchan.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {bonchanReducer} from "./bonchan/bonchan.slice";

export const store = configureStore( {
    reducer: {
        [bonchanApi.reducerPath]: bonchanApi.reducer,
        bonchan: bonchanReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bonchanApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>