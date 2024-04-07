import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../product/product.interface";

const initialState:IProduct[] = []

export const paperSlice = createSlice({
    name: 'paper',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IProduct>) => {
            state.push(action.payload)
        },

        removeItem: (state, action: PayloadAction<{id: number}>) => {
            return state.filter(p => p.id !== action.payload.id)
        }
    }
})

export const paperReducer = paperSlice.reducer
export const paperAction = paperSlice.actions