// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'basedApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://super-shop-server.vercel.app' }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
