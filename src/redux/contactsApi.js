import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContacts: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContactById: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Material'],
    }),
    updateContact: builder.mutation({
      query: ({ body, id }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useUpdateContactMutation,
  useAddContactsMutation,
  useDeleteContactByIdMutation,
} = contactsApi;
