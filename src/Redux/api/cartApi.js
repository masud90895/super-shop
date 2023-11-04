import { api } from "./api";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCartData: builder.query({
      query: (email) => `/addToCart?email=${email}`,
    }),
    // get product
    getAllProduct: builder.query({
      query: () => `/products`,
      providesTags: ["Product"],
    }),
    postProducts: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    // delete product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),


  }),
})


export const { useGetAllCartDataQuery, usePostProductsMutation, useGetAllProductQuery, useDeleteProductMutation } = cartApi;