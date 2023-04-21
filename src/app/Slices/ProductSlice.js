import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productSlice=createApi({
    reducerPath:'products',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3004'}),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=> '/products',
        }),
        getProductById:builder.query({
            query:(id)=>(`/products/${id}`)
        }),
        addProduct:builder.mutation({
            query:(product)=>({ 
                url:'/products', 
                method:'POST',
                body:product
            })
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({ 
                url:`/products/${id}`, 
                method:'DELETE',
            }),
        })
    })
})


export const  { useGetProductsQuery, useGetProductByIdQuery, useAddProductMutation, useDeleteProductMutation }= productSlice