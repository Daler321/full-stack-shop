import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  ICategories,
  IProduct,
  IProductsFetch,
  ISingelItemFetch,
} from '../../types/products.api.interface';

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/v1/products' }),
  tagTypes: ['products', 'categories'],
  endpoints: (build) => ({
    fetchOnePage: build.query<IProductsFetch, { page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: '/',
        params: {
          limit: limit,
          skip: (page - 1) * limit,
        },
      }),
      providesTags: (result) => ['products'],
    }),

    fetchAllProducts: build.query<IProductsFetch, null>({
      query: () => ({
        url: '/',
        params: {
          limit: 0,
        },
      }),
      providesTags: (result) => ['products'],
    }),

    fetchCategories: build.query<ICategories[], null>({
      query: () => ({
        url: '/categories',
      }),
      providesTags: (result) => ['categories'],
    }),

    fetchCategoryItems: build.query<
      IProductsFetch,
      { page: number; limit: number; name: string }
    >({
      query: ({ page, limit, name }) => ({
        url: `/categories/${name}`,
        params: {
          limit: limit,
          skip: (page - 1) * limit,
        },
      }),
      providesTags: (result) => ['categories'],
    }),

    fetchSearch: build.query<
      IProductsFetch,
      { page: number; limit: number; query: string }
    >({
      query: ({ page, limit, query }) => ({
        url: `/search?q=${query}`,
        params: {
          limit: limit,
          skip: (page - 1) * limit,
        },
      }),
      providesTags: (result) => ['categories'],
    }),

    fetchSingleProduct: build.query<ISingelItemFetch, number>({
      query: (id) => ({
        url: `/item/${id}`,
      }),
      providesTags: (result) => ['categories'],
    }),

    fetchArrayOfItems: build.query<IProduct[], number[]>({
      query: (productsId) => ({
        url: `/itemsarray`,
        method: 'post',
        body: { productsId },
      }),
      providesTags: (result) => ['products'],
    }),
  }),
});
