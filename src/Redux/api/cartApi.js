import { api } from "./api";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCartData: builder.query({
      query: (email) => `/addToCart?email=${email}`,
    }),
  }),
})


export const { useGetAllCartDataQuery } = cartApi;