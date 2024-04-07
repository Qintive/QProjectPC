import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProduct } from './product.interface'

export const productApi = createApi({
    reducerPath: 'api/product',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    endpoints: build =>({
        getProducts: build.query<IProduct[], number>({query: (limit=5) => `product?limit=${limit}`}),
        getImage: build.query<string, number>({ query: () => `uploads/` }) // Добавьте эту строку
    }) 
})

export const useGetProductsQuery = productApi.endpoints.getProducts.useQuery;
export const useGetImageQuery = productApi.endpoints.getImage.useQuery;
