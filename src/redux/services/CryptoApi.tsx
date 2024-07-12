import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-key': '71b81edd9amsh8911dd74b17faf8p126efajsn25864c588868',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url:string) => ({url, headers:cryptoApiHeaders})
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getCryptos: build.query({
      query: () => createRequest("/coins")
    }),
    getCryptoDetails: build.query({
      query:(uuid)=>createRequest(`coin/${uuid}`)
    }),
    getCryptoHistory: build.query({
      query: ({ uuid, timeperiod }) => createRequest(`coin/${uuid}/history?timePeriod=${timeperiod}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery , useGetCryptoHistoryQuery} = cryptoApi;
