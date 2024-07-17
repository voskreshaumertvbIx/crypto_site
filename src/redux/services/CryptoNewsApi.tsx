import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '1aa421200eeb4435a60e57a1b5503d03';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ limit, offset }) => `everything?q=cryptocurrency&pageSize=${limit}&page=${offset / limit + 1}&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = newsApi;
