import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, {payload}) => {
            const goods = payload

            const isExists = state.some(g => g.id === goods.id)

            if(isExists){
                const index = state.findIndex(item => item.id === goods.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
            }else
                state.push(goods)
        }
    }
})

export const {actions, reducer} = favoritesSlice