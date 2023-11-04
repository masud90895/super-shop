import { api } from "./api";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCartData: builder.query({
      query: (email) => `/addToCart?email=${email}`,
    }),
    postProducts: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        body: data,
      }),
    })
  }),
})


export const { useGetAllCartDataQuery, usePostProductsMutation } = cartApi;