import { configureStore } from "@reduxjs/toolkit";
import sliceProduckt from "./slice/sliceProduckt";

export const store=configureStore({
    reducer:{
        product:sliceProduckt
    }
})

export type RootState= ReturnType<typeof store.getState>


export type RootDispatch=typeof store.dispatch
