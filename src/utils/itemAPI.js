import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./constant";

export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl:BASE_URL }),
  tagTypes: ["Item"],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "items",
      providesTags:['Item'],
      /*providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Item", id })),
              { type: "Item", id: "LIST" },
            ]
          : [{ type: "Item", id: "LIST" }],*/
    }),
    addItem: builder.mutation({
      query: (item) => ({
        url: "items",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ['Item'],
    }),
    updateItem: builder.mutation({
      query: ({ _id, ...item }) => ({
        url: `items/${_id}`,
        method: "PUT",
        body: item,
      }),
      invalidatesTags: ['Item'],
    }),
    deleteItem: builder.mutation({
      query: (_id) => ({
        url: `items/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Item'],
    }),
  }),
});

export const {
  useGetItemsQuery,
  useAddItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = itemApi;
